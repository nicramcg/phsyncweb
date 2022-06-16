package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public enum EM409  implements RestErrorMessage {

    EQUIPMENT_IDENTIFIER_ALREADY_EXISTS("Equipment with given identifier already exists."),
    MAC_ADDRESS_ALREADY_EXISTS("Mac Address already exists.");


    private String message;

    EM409(String message) {
        this.message = message;
    }

    @Override
    public HttpStatus getCode() {
        return HttpStatus.CONFLICT;
    }

    @Override
    public String getValue() {
        return message;
    }

    @Override
    public String getName() {
        return super.name();
    }
}
