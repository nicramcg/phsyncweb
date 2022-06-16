package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM401 implements RestErrorMessage {
    UNAUTHORIZED("No logged user"),
    NO_PERMISSION("No permission for this operation."),
    CAN_NOT_EXTRACT_USERNAME("An error occurred during getting username from token."),
    TOKEN_EXPIRED("The token is expired and not valid anymore."),
    USERNAME_OR_PASSWORD_INVALID("Authentication Failed. Username or Password not valid."),
    LOG_IN_DISABLED("Logging in disabled."),
    CANNOT_LOG_IN_TWO_DEVICES("Cannot log in two devices.");

    private String message;

    EM401(String value) {
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
        return HttpStatus.UNAUTHORIZED;
    }
}
