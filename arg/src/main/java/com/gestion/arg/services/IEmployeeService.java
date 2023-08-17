package com.gestion.arg.services;

import java.util.List;


import com.gestion.arg.entities.Employee;

public interface IEmployeeService {

	List<Employee> getAll();

	Employee get(Long id);

	void deleteEmployee(Long id);
	
	void save(Employee employee);
	
	
}
