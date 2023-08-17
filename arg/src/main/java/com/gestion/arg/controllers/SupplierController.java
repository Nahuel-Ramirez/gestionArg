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
import com.gestion.arg.entities.Supplier;
import com.gestion.arg.services.ICustomerService;
import com.gestion.arg.services.ISupplierService;

@RestController
public class SupplierController {
	
	@Autowired
	private ISupplierService service;
	
	@GetMapping("/api/suppliers")
	public List<Supplier> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/api/suppliers/{id}")
	public Supplier getSupplier(@PathVariable String id) {
		return service.get(Long.parseLong(id));
	}
	
	@PostMapping("/api/suppliers")
	public void save(@RequestBody Supplier supplier) {
		service.save(supplier);
	}
	
	@DeleteMapping("/api/suppliers/{id}")
	public void deleteSupplier(@PathVariable String id) {
		service.deleteSupplier(Long.parseLong(id));
	}

}
