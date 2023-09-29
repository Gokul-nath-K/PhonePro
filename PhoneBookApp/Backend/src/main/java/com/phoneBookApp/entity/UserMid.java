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
@Table(name = "user_mid_tbl")
public class UserMid {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fdk_user_id", referencedColumnName = "id")
    private User user;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Contacts> contacts;
	
	public UserMid() {
		
	}

	public UserMid(Long id, String name, User user, List<Contacts> contacts) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.contacts = contacts;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
		return "UserMid [id=" + id + ", name=" + name + ", user=" + user + ", contacts=" + contacts + "]";
	}
	
}
