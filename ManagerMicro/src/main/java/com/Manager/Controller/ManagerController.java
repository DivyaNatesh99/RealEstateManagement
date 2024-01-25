package com.Manager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.Manager.Entity.CustomerDTO;
import com.Manager.Entity.Manager;
import com.Manager.Entity.PropertyDTO;
import com.Manager.Services.ManagerService;

@CrossOrigin
@RestController
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	ManagerService service;
	
	@Autowired
	RestTemplate restTemplate;
	
	/*o	POST: /createExecutive (Input: Executive| Output:  Status) 
o	GET: /getAllExecutives(Output: List of Executives) 
o	GET: /getAllExecutivesByLocality(Input: Locality | Output: List of Executives) 
o	PUT : / assignExecutive(Input:CustomerId | Output: Status)
o	Get: / getAllCustomers(Output: List of Customers)
o	Get: / getCustomersById(Input : CustomerId | Output : Customer) */
	
	@PostMapping("/create")
	
	public Manager createExecutive(@RequestBody Manager manager)
	{
		return service.createExecutive(manager);
	}
	
	@GetMapping("/getAllExecutives")
	public List<Manager> getAllExecutives()
	{
		return service.getAllExecutives();
	}
	
	@GetMapping("/getByLocality")
	public List<Manager> geByLocality()
	{
		return service.getByLocality();
	}
	
	@PutMapping("/assignExecutive/{eId}")
	public List<Manager> assignExecutive()
	{
		return service.assignExecutives();
	}
	
	@GetMapping("/customerlist")
	public List<CustomerDTO> listofCustomer()
	{
		List<CustomerDTO> cus = null;
		String url = "http://localhost:8081/customer/get";
		try {
			cus = restTemplate.getForObject(url, List.class);
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return cus;
	}
	
	@GetMapping("/propertylist")
	
	public List<PropertyDTO> listofProperties()
	{
		List<PropertyDTO> pro = null;
		String url = "http://localhost:8082/property/get";
		try {
			pro = restTemplate.getForObject(url, List.class);
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return pro;
	}
	
	@GetMapping("/getcustomerbyid/{id}")
	public List<CustomerDTO> listofCustomer(@PathVariable int id)
	{
		List<CustomerDTO> cus = null;
		String url = "http://localhost:8081/customer/getbyid/{id}";
		try {
			cus = restTemplate.getForObject(url, List.class);
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return cus;
	}
	
	

}
