package com.phoneBookApp.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.phoneBookApp.entity.User;
import com.phoneBookApp.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService uService;
	
	
	@Operation(summary = "Retrieve all products records")
	@ApiResponses(value = { 
			@ApiResponse(responseCode = "200", description = "All user details are retrieved successfully!"),
			@ApiResponse(responseCode = "500", description = "Could not retrieve user records") 
	})
	@ResponseStatus(HttpStatus.FOUND)
	@GetMapping(value="/getAll", produces = "application/json")
	public ResponseEntity<List<User>> getAllUser() {
		
		return ResponseEntity.ok(uService.getAllUser());
	}
	
}
