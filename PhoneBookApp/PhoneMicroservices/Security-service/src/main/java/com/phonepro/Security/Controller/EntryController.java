package com.phonepro.Security.Controller;

import com.phonepro.Security.DTO.AuthenticationRequest;
import com.phonepro.Security.DTO.AuthenticationResponse;
import com.phonepro.Security.DTO.RegisterRequest;
import com.phonepro.Security.Service.EntryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/entry")
@RequiredArgsConstructor
public class EntryController {

    @Autowired
    EntryService eService;



    @PostMapping(value = "/post", consumes = "application/json")
    public ResponseEntity<AuthenticationResponse> CreateNewUser(@RequestBody RegisterRequest request) {

        return ResponseEntity.ok(eService.CreateNewUser(request));
    }


    @PostMapping(value = "/auth_user")
    public ResponseEntity<AuthenticationResponse> validateUser(@RequestBody AuthenticationRequest request) {

        return ResponseEntity.ok(eService.validateUser(request));
    }


}