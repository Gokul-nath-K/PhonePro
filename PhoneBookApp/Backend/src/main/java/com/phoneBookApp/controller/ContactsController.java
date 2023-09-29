package com.phoneBookApp.controller;

import java.util.List;  


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookApp.entity.Contacts;
import com.phoneBookApp.entity.UserContacts;
import com.phoneBookApp.repository.ContactsRepository;
import com.phoneBookApp.repository.UserContactsRepository;
import com.phoneBookApp.services.ContactsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/contacts")
public class ContactsController {

	@Autowired
	ContactsService cService;
	
	@Operation(summary = "Retrive all contacts of particular user")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Contacts retrived successfully"),
			@ApiResponse(responseCode = "400", description = "Not found")
	})
	@ResponseStatus(HttpStatus.FOUND)
	@GetMapping("/{user_id}/getAll")
	public ResponseEntity<List<Contacts>> getAllContacts(@PathVariable(value = "user_id") Long user_id) {
		
		return ResponseEntity.ok(cService.getAllContacts(user_id));
	}
}
