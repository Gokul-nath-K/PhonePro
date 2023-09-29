package com.phoneBookApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.phoneBookApp.entity.UserContacts;
import com.phoneBookApp.services.UserContactsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/user_contact")
public class UserContactsController {

	
	@Autowired
	UserContactsService service;
	
	@Operation(summary = "Add new contact of particular user")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Contact added  successfully"),
			@ApiResponse(responseCode = "400", description = "Could not save contact")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/post")
	public ResponseEntity<UserContacts> postUser(@RequestBody UserContacts u) {
		
		return ResponseEntity.ok(service.postUser(u));
		
	}
}
