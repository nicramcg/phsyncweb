package com.nicramitsolutions.phsyncweb.service;

import com.nicramitsolutions.phsyncweb.configstorage.StorageEnvVariables;
import com.nicramitsolutions.phsyncweb.data.ProgressFile;
import com.nicramitsolutions.phsyncweb.data.UploadingResult;
import com.nicramitsolutions.phsyncweb.repository.ProgressFileRepository;
import com.nicramitsolutions.phsyncweb.service.utils.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ProgressFileService {
    private final ProgressFileRepository progressFileRepository;
    private final StorageEnvVariables storageEnvVariables;


    public ProgressFileService(ProgressFileRepository progressFileRepository, StorageEnvVariables storageEnvVariables) {
        this.progressFileRepository = progressFileRepository;
        this.storageEnvVariables = storageEnvVariables;
    }


    public UploadingResult uploadFile(MultipartFile file, Long userId, String lastModifiedDtTxt) {
        UploadingResult uploadingResult = new UploadingResult();
        Optional<ProgressFile> fileOnServer = progressFileRepository.findTop1ByUserIdOrderByLocalDateTimeDesc(userId);
        boolean uploadIsReq = false;
        if (!fileOnServer.isPresent()) {
            uploadIsReq = true;
        } else {
            LocalDateTime lastModifiedDt = LocalDateTime.parse(lastModifiedDtTxt, DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
            if (fileOnServer.get().getLocalDateTime().isBefore(lastModifiedDt)) {
                uploadIsReq = true;
            }
        }
        if (uploadIsReq) {
            String originalFilename = file.getOriginalFilename();
            String extension = FileUtils.getExtension(originalFilename);
            ProgressFile progressFile = new ProgressFile();
            progressFile.setUserId(userId);
            progressFile.setFileName(originalFilename);
            progressFile.setExtension(extension);
            progressFile.setLocalDateTime(LocalDateTime.now());
            progressFileRepository.save(progressFile);

            String baseFileStoragePath = storageEnvVariables.getBaseFileStoragePath();
            FileUtils.prepareDir(baseFileStoragePath);
            String basePath =  baseFileStoragePath + File.separator + userId;
            FileUtils.prepareDir(basePath);
            String targetFile = basePath + File.separator + FileUtils.getFileNameWithoutExtension(originalFilename) + "_" + progressFile.getId() + extension;
            try {
                copyFile(file.getBytes(), targetFile);
                if (Files.exists(Paths.get(targetFile))) {
                    uploadingResult.setUploaded(true);
                } else {
                    uploadingResult.setUploaded(false);
                    progressFileRepository.delete(progressFile);
                }
            } catch (IOException e) {
                e.printStackTrace();
                progressFileRepository.delete(progressFile);
                ;
            }
        }
        return uploadingResult;
    }

    public static void copyFile(byte[] data, String destination) throws IOException {
        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(destination));
        stream.write(data);
        stream.close();
    }

    public byte[] getLatestFile(Long userId) {
        Optional<ProgressFile> fileOnServer = progressFileRepository.findTop1ByUserIdOrderByLocalDateTimeDesc(userId);
        if(!fileOnServer.isPresent()) {
            return new byte[0];
        }
        try {
            Path path = Paths.get(storageEnvVariables.getBaseFileStoragePath()
                    + File.separator + userId
                    + File.separator + fileOnServer.get().getFileName());
            return FileUtils.readBytes(path);
        } catch (IOException e) {
            Logger.getLogger(ProgressFileService.class.getName()).log(Level.INFO, e.toString());
        }
        return new byte[0];
    }
}
