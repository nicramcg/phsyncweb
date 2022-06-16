package com.nicramitsolutions.phsyncweb.config.controller;


import com.nicramitsolutions.phsyncweb.config.SecurityUtils;
import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
public class SecurityController {
    private final AppUserService appUserService;

    public SecurityController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/api/current/user")
    public ResponseEntity<?> getUserAccount() {
        String currentLogin = SecurityUtils.getCurrentLogin();
        Optional<AppUser> currentUser = appUserService.findByUsername(currentLogin);
        if (currentUser.isPresent()) {
            currentUser.get().setPassword(null);
            return ResponseEntity.ok(currentUser.get());
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @GetMapping(value = "/api/csrf-token")
    public ResponseEntity<?> getCsrfToken(HttpServletRequest request) {
        CsrfToken token = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
        Map<String, String> result = new HashMap<>();
        result.put("token", token.getToken());
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/current/user/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        SecurityContextHolder.getContext().setAuthentication(null);
    }
}
