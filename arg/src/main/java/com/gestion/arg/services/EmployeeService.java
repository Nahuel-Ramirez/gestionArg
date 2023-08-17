package com.gestion.arg.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.arg.entities.Customer;
import com.gestion.arg.entities.Employee;
import com.gestion.arg.repository.CustomerRepository;
import com.gestion.arg.repository.EmployeeRepository;

@Service
public class EmployeeService implements IEmployeeService {

	@Autowired
	private EmployeeRepository repository;
	
	@Override
	public List<Employee> getAll(){
		return (List<Employee>)repository.findAll();
	}

	@Override
	public Employee get(Long id) {
		return (Employee) repository.findById(id).get();
	}

	@Override
	public void deleteEmployee(Long id) {
		repository.deleteById(id);
	}
	
	public void save(Employee employee) {
		repository.save(employee);
	}
	
}