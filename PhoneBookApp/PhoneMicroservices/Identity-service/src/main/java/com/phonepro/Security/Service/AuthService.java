package com.phonepro.Security.Service;

import com.phonepro.Security.DTO.AuthRequest;
import com.phonepro.Security.Model.UserCredential;
import com.phonepro.Security.Repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserCredentialRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    public String saveUser(UserCredential credential) {

        List<UserCredential> user = repository.findByEmail(credential.getEmail());

        if(!user.isEmpty()) {

            return "";
        }
        else {

            credential.setPassword(passwordEncoder.encode(credential.getPassword()));
            repository.save(credential);
            return jwtService.generateToken(credential.getName());
        }
    }

    public String generateToken(AuthRequest authRequest) {

        try {

            Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            if (authenticate.isAuthenticated()) {

                return jwtService.generateToken(authRequest.getEmail());

            } else {

                throw new RuntimeException("");
            }
        }
        catch(Exception e) {

            return "";
        }
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }


}