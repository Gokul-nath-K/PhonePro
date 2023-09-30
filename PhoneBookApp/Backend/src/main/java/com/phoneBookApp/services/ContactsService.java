package com.phoneBookApp.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookApp.entity.Contacts;
import com.phoneBookApp.entity.UserContacts;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserContactsRepository;

@Service
public class ContactsService {

	@Autowired
	ContactsRepository cRepo;
	
	@Autowired
	UserContactsRepository uRepo;
	
	public List<Contacts> getAllContacts(Long user_id) {
		
		UserContacts user = null;
		
		try {
			
			 user = uRepo.findById(user_id).get();
		}
		catch(Exception e) {
			
		}
		
		if(user != null) {
			
			return user.getContacts();
		}
		else {
			
			return new ArrayList<>();
		}
	}
}
