package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM408 implements RestErrorMessage {
    TOKEN_EXPIRED("token expired.");

    private String message;

    EM408(String value) {
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
        return HttpStatus.REQUEST_TIMEOUT;
    }
}
