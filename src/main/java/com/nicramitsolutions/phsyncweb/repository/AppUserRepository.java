package com.nicramitsolutions.phsyncweb.repository;

import com.nicramitsolutions.phsyncweb.data.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findTop1ByUserNameIgnoreCase(String userName);
}
