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

import com.gestion.arg.services.ICustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	private ICustomerService service;
	
	@GetMapping("/api/customers")
	public List<Customer> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/api/customers/{id}")
	public Customer getCustomer(@PathVariable String id) {
		return service.get(Long.parseLong(id));
	}
	
	@PostMapping("/api/customers")
	public void save(@RequestBody Customer customer) {
		service.save(customer);
	}
	
	@DeleteMapping("/api/customers/{id}")
	public void deleteCustomer(@PathVariable String id) {
		service.deleteCustomer(Long.parseLong(id));
	}

}
