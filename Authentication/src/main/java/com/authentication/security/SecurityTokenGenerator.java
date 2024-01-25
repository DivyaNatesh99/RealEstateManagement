package com.authentication.security;



import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.authentication.entity.User;

import io.jsonwebtoken.Jwts;

@Service
public class SecurityTokenGenerator {
	
	public Map<String,String> generateToken(User user)
	{
		long currentTime = System.currentTimeMillis();
		
		String jwttoken = Jwts.builder().setIssuer("ShopZone")
				.setSubject(user.getEmailId()).setIssuedAt(new Date(currentTime))
				.signWith(io.jsonwebtoken.SignatureAlgorithm.HS256, "mysecretkey")
				.setExpiration(new Date(currentTime+600000))
				.compact();
		
		Map<String, String> map = new HashMap<>();
		map.put("token", jwttoken);
		map.put("message", "Authentication SucessFul");
		map.put("message", "User sucessfully logged In");
		map.put("emailid", user.getEmailId());
		String userRole = String.valueOf(user.getUserRole());
		map.put("userRole", userRole);
		return map;
	}

}
