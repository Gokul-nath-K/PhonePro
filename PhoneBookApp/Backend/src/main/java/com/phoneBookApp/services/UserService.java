package com.phoneBookApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookApp.entity.User;
import com.phoneBookApp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	
	public List<User> getAllUser() {
		
		return uRepo.findAll();
	}
}
