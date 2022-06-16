package com.nicramitsolutions.phsyncweb.controller;

import com.nicramitsolutions.phsyncweb.data.UploadingResult;
import com.nicramitsolutions.phsyncweb.service.ProgressFileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@PreAuthorize("permitAll()")
public class ProgressFileUploadController {
    private final ProgressFileService progressFileService;

    public ProgressFileUploadController(ProgressFileService progressFileService) {
        this.progressFileService = progressFileService;
    }

    @PostMapping("/file/upload/{token}/{lastModifiedDtTxt}")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file,
                                    @PathVariable("token") String token,
                                    @PathVariable("lastModifiedDtTxt") String lastModifiedDtTxt) {
        UploadingResult uploadingResult = progressFileService.uploadFile(file, token, lastModifiedDtTxt);
        return ResponseEntity.ok(uploadingResult);
    }

    @GetMapping("/file/latest/{token}")
    public ResponseEntity<?> getLatestProgressFile(@PathVariable("token") String token) {
        byte[] result = progressFileService.getLatestFile(token);
        if(result.length > 0){
            return ResponseEntity.ok(result);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/latest-file/{token}")
    public String getLatestProgressFile64(@PathVariable("token") String token) {
        String latestFileAsBase64 = progressFileService.getLatestFileAsBase64(token);
        return latestFileAsBase64;
    }

    @GetMapping("/test/text")
    public ResponseEntity<?> testText() {
        return ResponseEntity.ok("Test");
    }
}
