package com.ems.employeemanagement.repository;

import com.ems.employeemanagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for Employee entity.
 * Spring Data JPA automatically provides CRUD methods like
 * save(), findAll(), findById(), deleteById(), etc.
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    boolean existsByEmail(String email);
}
