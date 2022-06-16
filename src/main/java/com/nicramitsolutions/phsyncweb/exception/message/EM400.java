package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM400 implements RestErrorMessage {
    BAD_REQUEST("Bad request"),
    NO_LOGGED_USER_FOUND("No logged user found"),
    USER_ALREADY_EXISTS("User already exists");



    private String message;

    EM400(String value) {
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
