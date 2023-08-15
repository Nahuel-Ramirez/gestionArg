package com.gestion.arg.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.arg.entities.Customer;
import com.gestion.arg.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService {

	@Autowired
	private CustomerRepository repository;
	
	@Override
	public List<Customer> getAll(){
		return (List<Customer>)repository.findAll();
	}

	@Override
	public Customer get(Long id) {
		return (Customer) repository.findById(id).get();
	}

	@Override
	public void deleteCustomer(Long id) {
		repository.deleteById(id);
	}
	
	public void save(Customer customer) {
		repository.save(customer);
	}
	
}
