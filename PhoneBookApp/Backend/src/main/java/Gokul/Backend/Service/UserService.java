package Gokul.Backend.Service;

import java.util.ArrayList;
import java.util.List;

import Gokul.Backend.Entity.Enumerate.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Gokul.Backend.DTO.UserDTO;
import Gokul.Backend.Entity.User;
import Gokul.Backend.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	
	public List<UserDTO> getAll() {
		
		List<User> user = uRepo.findAll();
		List<UserDTO> userDTO = new ArrayList<>();
		
		for(User u : user) {
			
			userDTO.add( UserDTO
			.builder()
					.id(u.getId())
					.name(u.getName())
					.email(u.getEmail())
					.dob(u.getDob())
					.phoneno(u.getPhoneno())
					.role(u.getRole().toString())
					.build());
		}
		
		return userDTO;
	}

	public UserDTO getByEmail(String email) {
		
		User user = uRepo.findByEmail(email).get();
		
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

	public List<User> getAllUser() {
		
		return uRepo.findAll();
	}

	public UserDTO getById(Long id) {

		User user =  uRepo.findById(id).get();

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

	public List<UserDTO> getByRole(String role) {

		List<User> user = uRepo.findByRole(Role.valueOf(role.toUpperCase()));
		List<UserDTO> userDTO = new ArrayList<>();

		for(User u : user) {

			userDTO.add( UserDTO
					.builder()
					.id(u.getId())
					.name(u.getName())
					.email(u.getEmail())
					.dob(u.getDob())
					.phoneno(u.getPhoneno())
					.role(u.getRole().toString())
					.build());
		}

		return userDTO;
	}
}
