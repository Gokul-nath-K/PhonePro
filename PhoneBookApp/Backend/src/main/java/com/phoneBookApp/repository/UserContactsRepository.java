package com.phoneBookApp.repository;

import java.util.List;  

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.phoneBookApp.entity.UserContacts;

@Repository
public interface UserContactsRepository extends JpaRepository<UserContacts, Long> {

	@Query("select u from UserContacts u where u.phone_no = ?1")
	public List<UserContacts> getByPhno(@Param("phone_no") Long phone_no);
}
