package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM404 implements RestErrorMessage {
    NOT_FOUND("Resource not found.");

    private String message;

    EM404(String value) {
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
        return HttpStatus.BAD_REQUEST;
    }
}
