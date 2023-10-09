package Gokul.Backend.Service;

import java.util.ArrayList;
import java.util.List;

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
			.name(u.getName())
			.email(u.getEmail())
			.dob(u.getDob())
			.phoneno(u.getPhoneno())
			.build());
		}
		
		return userDTO;
	}

	public UserDTO getById(Long id) {
		
		User user = uRepo.findById(id).get();
		
		return UserDTO
				.builder()
				.name(user.getName())
				.email(user.getEmail())
				.dob(user.getDob())
				.phoneno(user.getPhoneno())
				.build();
	}

	public List<User> getAllUser() {
		
		return uRepo.findAll();
	}
	
}
