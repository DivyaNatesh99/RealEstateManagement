package com.authentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.authentication.entity.User;
import com.authentication.exception.UserAlreadyExistException;
import com.authentication.exception.UserNotFoundException;
import com.authentication.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepo repo;

	@Override
	public User signUp(User user) throws UserAlreadyExistException {
		// TODO Auto-generated method stub
		if(repo.findById(user.getEmailId()).isPresent())
		{
			throw new UserAlreadyExistException();
		}
		return repo.save(user);
	}

	@Override
	public User login(User user) throws UserNotFoundException {
		// TODO Auto-generated method stub
		
		User user1 = repo.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
		if(user1==null)
		{
			throw new UserNotFoundException();
		}
		return user1;
	}

	@Override
	public boolean deleteUserDetails(String emailId) {
		// TODO Auto-generated method stub
		repo.deleteById(emailId);
		return false;
	}

}
