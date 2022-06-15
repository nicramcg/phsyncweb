package com.nicramitsolutions.phsyncweb.controller;

import com.nicramitsolutions.phsyncweb.data.UploadingResult;
import com.nicramitsolutions.phsyncweb.service.ProgressFileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class ProgressFileUploadController {
    private final ProgressFileService progressFileService;

    public ProgressFileUploadController(ProgressFileService progressFileService) {
        this.progressFileService = progressFileService;
    }

    @PostMapping("/file/upload/{userId}/{lastModifiedDtTxt}")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file,
                                    @PathVariable("userId") Long userId,
                                    @PathVariable("lastModifiedDtTxt") String lastModifiedDtTxt) {
        UploadingResult uploadingResult = progressFileService.uploadFile(file, userId, lastModifiedDtTxt);
        return ResponseEntity.ok(uploadingResult);
    }

    @GetMapping("/file/latest/{userId}")
    public ResponseEntity<?> getLatestProgressFile(@PathVariable("userId") Long userId) {
        byte[] result = progressFileService.getLatestFile(userId);
        if(result.length > 0){
            return ResponseEntity.ok(result);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
