package com.gestion.arg.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gestion.arg.entities.Supplier;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {
}
