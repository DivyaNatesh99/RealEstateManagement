package com.Manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ManagerMicroApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagerMicroApplication.class, args);
		System.out.println("ok");
	}
	
	@Bean
	RestTemplate restTemplate()
	{
		return new RestTemplate();
	}

}
