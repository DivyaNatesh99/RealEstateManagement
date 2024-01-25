package com.Manager.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Manager.Entity.Manager;

@Service
public interface ManagerService {
	
	
	
	public Manager createExecutive(Manager manager);
	public List<Manager> getAllExecutives();
	public List<Manager> getAllExecutivesByLocality(String eLocality);
	public List<Manager> getByLocality();
	public List<Manager> assignExecutives();
	public List<Manager> getAllCustomers();
	public List<Manager> getAllCustomersById();

}
