package com.nicramitsolutions.phsyncweb;

import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class PhsyncwebApplication {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AppUserService appUserService() {
        return new AppUserService();
    }

    public static void main(String[] args) {
        SpringApplication.run(PhsyncwebApplication.class, args);
    }

}
