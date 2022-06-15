package com.nicramitsolutions.phsyncweb.repository;

import com.nicramitsolutions.phsyncweb.data.ProgressFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProgressFileRepository extends JpaRepository<ProgressFile, Long> {
    Optional<ProgressFile> findTop1ByUserIdOrderByLocalDateTimeDesc(Long userId);
}
