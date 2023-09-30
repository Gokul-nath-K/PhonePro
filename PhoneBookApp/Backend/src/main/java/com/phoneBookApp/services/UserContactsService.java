package com.phoneBookApp.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookApp.entity.Contacts;
import com.phoneBookApp.entity.User;
import com.phoneBookApp.entity.UserContacts;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserContactsRepository;

@Service
public class UserContactsService {

	@Autowired
	UserContactsRepository umRepo;
	
	@Autowired
	ContactsRepository cRepo;
	
	public UserContacts postUser(UserContacts u) {
			
			List<UserContacts> user = umRepo.getByPhno(u.getUser().getPhone_no());
			
			if(user.size() != 0) {
				
				UserContacts oldUser = umRepo.findById(user.get(0).getId()).get();
				
				oldUser.getContacts().add(u.getContacts().get(0));
				
				return umRepo.save(oldUser);
			}
			else {
				
				return umRepo.save(u);
			}
	}
	
	
	public UserContacts deleteContact(User u, Contacts contact) {
		
		List<UserContacts> user = umRepo.getByPhno(u.getPhone_no());
		
		if(user.size() != 0) {
			
			UserContacts oldUser = user.get(0);
			
			List<Contacts> contacts = oldUser.getContacts();
			
			contacts.removeIf(c -> c.getPhone_no().longValue() == contact.getPhone_no().longValue());
			
			oldUser.setContacts(contacts);
			
			cRepo.deleteById(contact.getId());
			
			return umRepo.save(oldUser);
		}
		else {
			
			return umRepo.save(user.get(0));
		}
	}
}
