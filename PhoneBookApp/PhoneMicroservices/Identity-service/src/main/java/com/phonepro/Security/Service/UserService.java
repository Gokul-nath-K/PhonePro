package com.phonepro.Security.Service;

import com.phonepro.Security.DTO.UserDTO;
import com.phonepro.Security.Model.UserCredential;
import com.phonepro.Security.Repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserCredentialRepository uRepo;

    public List<UserDTO> getAll() {

        List<UserCredential> user = uRepo.findAll();
        List<UserDTO> userDTO = new ArrayList<>();

        for(UserCredential u : user) {

            userDTO.add( UserDTO
                    .builder()
                    .id(u.getId())
                    .name(u.getName())
                    .email(u.getEmail())
                    .dob(u.getDob())
                    .phoneno(u.getPhoneno())
                    .role(u.getRole())
                    .build());
        }

        return userDTO;
    }

    public UserDTO getByEmail(String email) {

        UserCredential user = uRepo.findByEmail(email).get(0);

        return UserDTO
                .builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .dob(user.getDob())
                .phoneno(user.getPhoneno())
                .role(user.getRole().toString())
                .build();
    }

    public List<UserCredential> getAllUser() {

        return uRepo.findAll();
    }

    public UserDTO getById(Long id) {

        try {

            UserCredential user =  uRepo.findById(id).get();

            return UserDTO
                    .builder()
                    .id(user.getId())
                    .name(user.getName())
                    .email(user.getEmail())
                    .dob(user.getDob())
                    .phoneno(user.getPhoneno())
                    .role(user.getRole())
                    .build();
        }
        catch(Exception e) {

            return null;
        }

    }

    public List<UserDTO> getByRole(String role) {

        List<UserCredential> user = uRepo.findByRole(role);
        List<UserDTO> userDTO = new ArrayList<>();

        for(UserCredential u : user) {

            userDTO.add( UserDTO
                    .builder()
                    .id(u.getId())
                    .name(u.getName())
                    .email(u.getEmail())
                    .dob(u.getDob())
                    .phoneno(u.getPhoneno())
                    .role(u.getRole())
                    .build());
        }

        return userDTO;
    }
}