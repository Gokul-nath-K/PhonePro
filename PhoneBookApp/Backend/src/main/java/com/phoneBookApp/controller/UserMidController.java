package com.phoneBookApp.controller;

import java.util.List; 


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookApp.entity.UserMid;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserMidRepository;

@RestController
public class UserMidController {

	
	@Autowired
	UserMidRepository uRepo;
	
	@Autowired
	ContactsRepository cRepo;
	
	
	@GetMapping("/get-user")
	public List<UserMid> getAll() {
		
		return uRepo.findAll();
	}
	
	@PostMapping("/post/user")
	public UserMid postUser(@RequestBody UserMid u) {
		
		
		System.out.println(u.getContacts());
		System.out.println(u.getUser());
		
		List<UserMid> user = uRepo.findByName(u.getName());
		
//		System.out.println(user.size());
		if(user.size() != 0) {
			
			UserMid oldUser = uRepo.findById(user.get(0).getId()).get();
			
			oldUser.getContacts().add(u.getContacts().get(0));
			
			uRepo.save(oldUser);
		}
		else {
			
			uRepo.save(u);
		}
		
		return u;
		
	}
}
