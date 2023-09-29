package com.phoneBookApp.repository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.phoneBookApp.entity.UserMid;

@Repository
public interface UserMidRepository extends JpaRepository<UserMid, Long> {

	@Query("select u from UserMid u where u.name = ?1")
	public List<UserMid> findByName(@Param("name") String name);
}
