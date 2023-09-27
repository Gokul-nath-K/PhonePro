package com.phoneBookApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookApp.entity.User;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserRepository;

@RestController
public class UserController {

	
	@Autowired
	UserRepository uRepo;
	
	@Autowired
	ContactsRepository cRepo;
	
	
	@GetMapping("/get-user")
	public List<User> getAll() {
		
		return uRepo.findAll();
	}
	
	@PostMapping("/post/user")
	public User postUser(@RequestBody User u) {
		
		List<User> user = uRepo.findByName(u.getName());
		
		if(user.size() != 0) {
			
			User oldUser = uRepo.findById(user.get(0).getId()).get();
			
			oldUser.getContacts().add(u.getContacts().get(0));
			
			uRepo.save(oldUser);
		}
		else {
			
			uRepo.save(u);
		}
		
		return u;
		
	}
}
