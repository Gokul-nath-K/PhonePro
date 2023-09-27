package com.phoneBookApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phoneBookApp.entity.Contacts;

public interface ContactsRepository extends JpaRepository<Contacts, Long> {

}
