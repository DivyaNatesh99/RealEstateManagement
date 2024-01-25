package com.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.authentication.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,String> {
	
	public User findByEmailIdAndPassword(String emailId, String password);

}
