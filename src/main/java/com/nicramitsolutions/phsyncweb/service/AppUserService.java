package com.nicramitsolutions.phsyncweb.service;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import com.nicramitsolutions.phsyncweb.repository.AppUserRepository;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {
    private final AppUserRepository appUserRepository;

    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public void addUser(AppUser user) {
        if (appUserRepository.findTop1ByUserNameIgnoreCase(user.getUserName()) == null) {
            appUserRepository.save(user);
        }
    }
}
