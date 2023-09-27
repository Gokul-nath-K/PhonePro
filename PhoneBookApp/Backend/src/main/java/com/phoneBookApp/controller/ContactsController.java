package com.phoneBookApp.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookApp.entity.Contacts;
import com.phoneBookApp.entity.User;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserRepository;

@RestController
public class ContactsController {

	@Autowired
	ContactsRepository cRepo;
	
	@Autowired
	UserRepository uRepo;
	
	@GetMapping("/{user_id}/getAll")
	public List<Contacts> getAllContacts(@PathVariable(value = "user_id") Long user_id) {
		
		User user = uRepo.findById(user_id).get();
		
		return user.getContacts();
	}
}
