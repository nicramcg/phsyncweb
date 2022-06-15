package com.nicramitsolutions.phsyncweb.configstorage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class StorageEnvVariables {
    @Value("${storage.config.base.path}")
    private String baseFileStoragePath;

    public StorageEnvVariables() {
    }

    public String getBaseFileStoragePath() {
        return baseFileStoragePath;
    }

    public void setBaseFileStoragePath(String baseFileStoragePath) {
        this.baseFileStoragePath = baseFileStoragePath;
    }
}
