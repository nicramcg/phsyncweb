package com.nicramitsolutions.phsyncweb.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    /**
     * Redirects requests to index.html.
     *
     * @return string of redirection
     */
    @PreAuthorize("permitAll()")
    @RequestMapping({"/auto-login",
            "/login",
            "/login-helper",
            "/home"})
    public String index() {
        return "forward:/index.html";
    }
}
