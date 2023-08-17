package com.gestion.arg.services;

import java.util.List;


import com.gestion.arg.entities.Supplier;

public interface ISupplierService {

	List<Supplier> getAll();

	Supplier get(Long id);

	void deleteSupplier(Long id);
	
	void save(Supplier supplier);
	
	
}
