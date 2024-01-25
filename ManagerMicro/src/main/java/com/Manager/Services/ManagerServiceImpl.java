package com.Manager.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Manager.Entity.Manager;
import com.Manager.Repository.ManagerRepo;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	
	@Autowired
	ManagerRepo repo;

	@Override
	public Manager createExecutive(Manager manager) {
		// TODO Auto-generated method stub
		return repo.save(manager);
	}

	@Override
	public List<Manager> getAllExecutives() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Manager> getAllExecutivesByLocality(String eLocality) {
		// TODO Auto-generated method stub
		
		return repo.findAll();
	}

	@Override
	public List<Manager> getByLocality() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Manager> assignExecutives() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Manager> getAllCustomers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Manager> getAllCustomersById() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	
	
}
/*
	1. Executive
	<Details of Executive: Name, ContactNumber, Locality, EmailId, ..> 
	 

	REST End Points of Manager  Microservice 
	o	POST: /createExecutive (Input: Executive| Output:  Status) 
	o	GET: /getAllExecutives(Output: List of Executives) 
	o	GET: /getAllExecutivesByLocality(Input: Locality | Output: List of Executives) 
	o	PUT : / assignExecutive(Input:CustomerId | Output: Status)
	o	Get: / getAllCustomers(Output: List of Customers)
	o	Get: / getCustomersById(Input : CustomerId | Output : Customer)*/


	