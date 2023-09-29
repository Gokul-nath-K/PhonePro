package com.phoneBookApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookApp.entity.UserContacts;
import com.phoneBookApp.repository.UserContactsRepository;

@Service
public class UserContactsService {

	@Autowired
	UserContactsRepository umRepo;
	
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
}
