
package com.nicramitsolutions.phsyncweb.controller;

import com.nicramitsolutions.phsyncweb.service.ProgressFileService;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/list")
public class ProgressFilesListController {
    private final ProgressFileService progressFileService;

    public ProgressFilesListController(ProgressFileService progressFileService) {
        this.progressFileService = progressFileService;
    }


    @GetMapping("/get/current-user")
    public ResponseEntity<?> getListOfProgressFiles(Pageable pageable) {
        return ResponseEntity.ok(progressFileService.getProgressFilesListForCurrentUser(pageable));
    }
}
