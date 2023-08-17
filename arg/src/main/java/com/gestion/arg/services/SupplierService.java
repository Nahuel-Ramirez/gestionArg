package com.gestion.arg.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.arg.entities.Supplier;
import com.gestion.arg.repository.SupplierRepository;

@Service
public class SupplierService implements ISupplierService {

	@Autowired
	private SupplierRepository repository;
	
	@Override
	public List<Supplier> getAll(){
		return (List<Supplier>)repository.findAll();
	}

	@Override
	public Supplier get(Long id) {
		return (Supplier) repository.findById(id).get();
	}

	@Override
	public void deleteSupplier(Long id) {
		repository.deleteById(id);
	}
	
	public void save(Supplier supplier) {
		repository.save(supplier);
	}
	
}