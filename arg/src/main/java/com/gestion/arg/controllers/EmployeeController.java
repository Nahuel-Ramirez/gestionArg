package com.gestion.arg.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.arg.entities.Customer;
import com.gestion.arg.entities.Employee;
import com.gestion.arg.services.ICustomerService;
import com.gestion.arg.services.IEmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private IEmployeeService service;
	
	@GetMapping("/api/employees")
	public List<Employee> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/api/employees/{id}")
	public Employee getEmployee(@PathVariable String id) {
		return service.get(Long.parseLong(id));
	}
	
	@PostMapping("/api/employees")
	public void save(@RequestBody Employee employee) {
		service.save(employee);
	}
	
	@DeleteMapping("/api/employees/{id}")
	public void deleteEmployee(@PathVariable String id) {
		service.deleteEmployee(Long.parseLong(id));
	}

}
