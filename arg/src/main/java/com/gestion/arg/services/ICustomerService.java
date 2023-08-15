package com.gestion.arg.services;

import java.util.List;

import com.gestion.arg.entities.Customer;

public interface ICustomerService {

	List<Customer> getAll();

	Customer get(Long id);

	void deleteCustomer(Long id);
	
	void save(Customer customer);
	
	
}
