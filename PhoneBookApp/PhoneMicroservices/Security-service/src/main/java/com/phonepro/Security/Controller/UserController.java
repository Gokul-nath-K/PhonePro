package com.phonepro.Security.Controller;

import com.phonepro.Security.DTO.UserDTO;
import com.phonepro.Security.Model.User;
import com.phonepro.Security.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService uService;

    @GetMapping("/getAll")
    public List<UserDTO> getAll() {

        return uService.getAll();
    }

    @GetMapping("/getAllUser")
    public List<User> getAllUser() {

        return uService.getAllUser();
    }

    @GetMapping("/getByEmail/{email}")
    public UserDTO getByEmail(@PathVariable("email") String email) {

        return uService.getByEmail(email);
    }

    @GetMapping("/getByRole/{role}")
    public List<UserDTO> getByRole(@PathVariable("role") String role) {

        return uService.getByRole(role);
    }

    @GetMapping("/getById/{id}")
    public UserDTO getById(@PathVariable("id") Long id) {

        return uService.getById(id);
    }
}
