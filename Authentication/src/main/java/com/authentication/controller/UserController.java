package com.authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.authentication.entity.User;
import com.authentication.exception.UserAlreadyExistException;
import com.authentication.exception.UserNotFoundException;
import com.authentication.security.SecurityTokenGenerator;
import com.authentication.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	UserService service;
	
	@Autowired
	SecurityTokenGenerator token;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody User user) throws UserAlreadyExistException
	{
		try {
			User user1 = service.signUp(user);
			return new ResponseEntity<>(user1,HttpStatus.OK);
		}
		catch(Exception e)
		{
			e.getMessage();
			e.fillInStackTrace();
			throw new UserAlreadyExistException();
		}
	
}
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) throws UserNotFoundException
	{
		User reUser = service.login(user);
		if(reUser == null)
		{
			return new ResponseEntity<>("Login Failed", HttpStatus.NOT_FOUND);
		}
		reUser.setPassword(null);
		return new ResponseEntity<>(token.generateToken(reUser),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteuser/{emailId}")
	public ResponseEntity<?> deleteUser(@PathVariable String emailId)
	{
		return new ResponseEntity<>(service.deleteUserDetails(emailId), HttpStatus.OK);
	}
}
