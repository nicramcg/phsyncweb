package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM500 implements RestErrorMessage {
    INTERNAL_SERVER_ERROR("Internal server error."),
    INTERRUPTED_OPERATION("Interrupted operation."),
    UNSUPPORTED_OPERATION("Unsupported operation."),
    SAVE_FILE_ERROR("Cannot save file."),
    EMPTY_REPORT_FILE("Report file cannot be empty."),
    INVALID_REPORT_DATA("Report file is invalid."),
    INVALID_FILE_TYPE("File type is invalid."),
    INVALID_DATE_FORMAT("Invalid date format."),
    FIELD_MISMATCH_CLASS("Given field does not match given class."),
    DELETE_FILE_ERROR("Cannot delete file."),
    FILE_NOT_FOUND_ERROR("Cannot find file."),
    MQTT_PUBLISH_ERROR("MQTT publish error."),
    MQTT_SUBSCRIBE_ERROR("MQTT subscribe error."),
    HEARTBEAT_NOT_FOUND("Heartbeat not found."),
    HEARTBEAT_INVALID("Heartbeat is invalid."),
    READ_BYTES_ERROR("Read bytes IOException."),
    CONFIGURATION_ERROR("Configuration error."),
    CSV_PARSING_ERROR("Given csv is invalid."),
    IO_ERROR("Input/Output error.");

    private String message;

    EM500(String value) {
        this.message = value;
    }

    @Override
    public String getValue() {
        return message;
    }

    @Override
    public String getName() {
        return super.name();
    }

    @Override
    public HttpStatus getCode() {
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
