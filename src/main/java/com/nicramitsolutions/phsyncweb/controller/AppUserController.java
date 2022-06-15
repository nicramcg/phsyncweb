package com.nicramitsolutions.phsyncweb.controller;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/app-user")
public class AppUserController {
    private final AppUserService appUserService;


    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

//    @GetMapping("/add")
//    public ResponseEntity<?> getAllAppUsers(AppUser user) {
//        appUserService.addUser(user);
//        return ResponseEntity.ok(user);
//    }

}
