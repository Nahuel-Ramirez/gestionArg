package com.gestion.arg.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gestion.arg.entities.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	
	
	
}
