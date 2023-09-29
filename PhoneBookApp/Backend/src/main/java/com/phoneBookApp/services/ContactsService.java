package com.phoneBookApp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phoneBookApp.repository.ContactsRepository;

@Service
public class ContactsService {

	@Autowired
	ContactsRepository cRepo;
}
