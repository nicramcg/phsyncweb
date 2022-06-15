package com.nicramitsolutions.phsyncweb;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Bootstrap implements CommandLineRunner {
    private final AppUserRepository appUserRepository;

    public Bootstrap(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

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
            appUserRepository.save(user);
        }

        AppUser secondUser = appUserRepository.findTop1ByUserNameIgnoreCase("sylwia");
        if (secondUser == null) {
            secondUser = new AppUser();
            secondUser.setUserName("sylwia");
            appUserRepository.save(secondUser);
        }
    }
}

