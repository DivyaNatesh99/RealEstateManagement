package com.authentication.service;

import org.springframework.stereotype.Service;

import com.authentication.entity.User;
import com.authentication.exception.UserAlreadyExistException;
import com.authentication.exception.UserNotFoundException;

@Service
public interface UserService {
	
	public User signUp(User user) throws UserAlreadyExistException;
	public User login(User user) throws UserNotFoundException;
	public boolean deleteUserDetails(String emailId);

}
