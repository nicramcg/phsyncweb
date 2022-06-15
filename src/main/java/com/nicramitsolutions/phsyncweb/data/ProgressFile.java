package com.nicramitsolutions.phsyncweb.data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class ProgressFile {
    private Long id;
    private LocalDateTime localDateTime;
    private String fileName;
    private Long userId;
    private String extension;
    private String fileNameUuid;

    public ProgressFile() {
    }

    @Id
    @Column(name = "id")
    @SequenceGenerator(allocationSize = 1, name = "s_progress_file", sequenceName = "s_progress_file")
    @GeneratedValue(generator = "s_progress_file")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getFileNameUuid() {
        return fileNameUuid;
    }

    public void setFileNameUuid(String fileNameUuid) {
        this.fileNameUuid = fileNameUuid;
    }
}
