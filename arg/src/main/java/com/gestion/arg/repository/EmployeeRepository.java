package com.gestion.arg.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.gestion.arg.entities.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
