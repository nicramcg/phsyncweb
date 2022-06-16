package com.nicramitsolutions.phsyncweb.exception;

import com.nicramitsolutions.phsyncweb.exception.message.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.HttpStatusCodeException;

import java.util.Objects;
import java.util.stream.Stream;



public class RestExceptionBuilder {


    public static RestException build(RestErrorMessage restErrorMessage) {
        switch (restErrorMessage.getCode()) {
            case BAD_REQUEST:
                return new RestException.BadRequest400(restErrorMessage);
            case UNAUTHORIZED:
                return new RestException.Unauthorized401(restErrorMessage);
            case PAYMENT_REQUIRED:
                return new RestException.PaymentRequired402(restErrorMessage);
            case NOT_FOUND:
                return new RestException.NotFound404(restErrorMessage);
            case CONFLICT:
                return new RestException.Conflict409(restErrorMessage);
            case REQUEST_TIMEOUT:
                return new RestException.RequestTimeout408(restErrorMessage);
            case INTERNAL_SERVER_ERROR:
                return new RestException.InternalServerError500(restErrorMessage);
            case SERVICE_UNAVAILABLE:
                return new RestException.ServiceUnavailable503(restErrorMessage);
            default:
                throw RestExceptionBuilder.build(EM500.UNSUPPORTED_OPERATION);
        }
    }

    public static RestException from(HttpStatusCodeException ex) {
        if (ex instanceof HttpClientErrorException.BadRequest) {
            RestErrorMessage em = Stream.of(EM400.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM400.BAD_REQUEST);
            return RestExceptionBuilder.build(em);
        } else if (ex instanceof HttpClientErrorException.Unauthorized) {
            RestErrorMessage em = Stream.of(EM401.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM401.UNAUTHORIZED);
            return RestExceptionBuilder.build(em);
        } else if (ex instanceof HttpClientErrorException.NotFound) {
            RestErrorMessage em = Stream.of(EM404.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM404.NOT_FOUND);
            return RestExceptionBuilder.build(em);
        } else if (ex instanceof HttpClientErrorException.Conflict) {
            RestErrorMessage em = Stream.of(EM409.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM409.EQUIPMENT_IDENTIFIER_ALREADY_EXISTS);
            return RestExceptionBuilder.build(em);
        } else if (ex instanceof HttpServerErrorException.InternalServerError) {
            RestErrorMessage em = Stream.of(EM500.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM500.INTERNAL_SERVER_ERROR);
            return RestExceptionBuilder.build(em);
        } else if (ex instanceof HttpServerErrorException.ServiceUnavailable) {
            RestErrorMessage em = Stream.of(EM503.values()).filter(v -> Objects.equals(ex.getResponseBodyAsString(), v.getValue())).findFirst()
                    .orElse(EM503.SERVICE_UNAVAILABLE);
            return RestExceptionBuilder.build(em);
        } else {
            throw RestExceptionBuilder.build(EM500.UNSUPPORTED_OPERATION);
        }
    }
}
