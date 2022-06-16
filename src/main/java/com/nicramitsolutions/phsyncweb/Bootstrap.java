package com.nicramitsolutions.phsyncweb;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.data.UserRole;
import com.nicramitsolutions.phsyncweb.repository.AppUserRepository;
import com.nicramitsolutions.phsyncweb.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class Bootstrap implements CommandLineRunner {
    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AppUserService appUserService;

    @Override
    public void run(String... args) throws Exception {
        init();
    }

    private void init() {
        initUsers();
    }

    private void initUsers() {
        AppUser user = appUserRepository.findTop1ByUserNameIgnoreCase("marcin");
        if (user == null) {
            user = new AppUser();
            user.setUserName("marcin");
            user.setPassword(passwordEncoder.encode("test"));
            user.setFirstName("Marcin");
            user.setLastName("G");
            user.setRoles(Arrays.asList(new UserRole("ROLE_ADMIN")));
            user.setAssignedToken(appUserService.createNewToken());
            appUserRepository.save(user);
        }
    }
}

