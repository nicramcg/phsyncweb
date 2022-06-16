package com.nicramitsolutions.phsyncweb.exception;

import com.nicramitsolutions.phsyncweb.exception.message.RestErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class RestException extends RuntimeException {

    private String identifier;
    private String message;
    private HttpStatus httpStatus;

    RestException(String identifier, String message, HttpStatus httpStatus) {
        super(message);
        setIdentifier(identifier);
        setMessage(message);
        setHttpStatus(httpStatus);
    }

    RestException(RestErrorMessage restErrorMessage) {
        this(restErrorMessage.getName(), restErrorMessage.getValue(), restErrorMessage.getCode());
    }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }

    @Override
    public String getMessage() {
        return "<" + identifier + "> " + message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public static class BadRequest400 extends RestException {
        BadRequest400(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public static class Unauthorized401 extends RestException {
        Unauthorized401(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.PAYMENT_REQUIRED)
    public static class PaymentRequired402 extends RestException {
        PaymentRequired402(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public static class NotFound404 extends RestException {
        NotFound404(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.CONFLICT)
    public static class Conflict409 extends RestException {
        Conflict409(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }


    @ResponseStatus(value = HttpStatus.REQUEST_TIMEOUT)
    public static class RequestTimeout408 extends RestException {
        RequestTimeout408(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public static class InternalServerError500 extends RestException {
        InternalServerError500(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }

    @ResponseStatus(value = HttpStatus.SERVICE_UNAVAILABLE)
    public static class ServiceUnavailable503 extends RestException {
        ServiceUnavailable503(RestErrorMessage restErrorMessage) {
            super(restErrorMessage);
        }
    }


}
