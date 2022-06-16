package com.nicramitsolutions.phsyncweb.exception.message;

import org.springframework.http.HttpStatus;

public interface RestErrorMessage {

    HttpStatus getCode();

    String getValue();

    String getName();

}
