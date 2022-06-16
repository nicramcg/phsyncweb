package com.nicramitsolutions.phsyncweb.controller;

import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/app-user")
@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
public class AppUserController {
    private final AppUserService appUserService;


    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/my-token")
    public ResponseEntity<?> getMyToken() {
        return ResponseEntity.ok(appUserService.currentUserGetAssignedToken());
    }

}
