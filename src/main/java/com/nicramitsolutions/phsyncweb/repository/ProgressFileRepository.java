package com.nicramitsolutions.phsyncweb.repository;

import com.nicramitsolutions.phsyncweb.data.ProgressFile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProgressFileRepository extends JpaRepository<ProgressFile, Long> {
    Optional<ProgressFile> findTop1ByUserIdOrderByLocalDateTimeDesc(Long userId);
    Page<ProgressFile> findAllByUserIdOrderByLocalDateTimeDesc(@Param("userId") Long userId, Pageable pageable);
}
