package com.ems.employeemanagement.exception;

/**
 * Thrown when an employee is not found in the database.
 */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
