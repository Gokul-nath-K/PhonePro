package com.phoneBookApp.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity; 
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;



@Entity
@Table(name = "user_contacts")
public class UserContacts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	private Long phone_no;
	
	@OneToOne
    @JoinColumn(name = "fdk_user_id", referencedColumnName = "id")
    private User user;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Contacts> contacts;
	
	public UserContacts() {
		
	}

	
	public UserContacts(Long id, String email, Long phone_no, User user, List<Contacts> contacts) {
	
		this.id = id;
		this.email = email;
		this.phone_no = phone_no;
		this.user = user;
		this.contacts = contacts;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Long getPhone_no() {
		return phone_no;
	}


	public void setPhone_no(Long phone_no) {
		this.phone_no = phone_no;
	}


	public List<Contacts> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contacts> contacts) {
		this.contacts = contacts;
	}

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "UserMid [id=" + id + ", email=" + email + ", phone_no=" + phone_no + ", user=" + user + ", contacts="
				+ contacts + "]";
	}
	
}
