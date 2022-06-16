package com.nicramitsolutions.phsyncweb.repository;

import com.nicramitsolutions.phsyncweb.data.AppUserToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserTokenRepository extends JpaRepository<AppUserToken, Long> {
    Long countAllByToken(String token);
}
