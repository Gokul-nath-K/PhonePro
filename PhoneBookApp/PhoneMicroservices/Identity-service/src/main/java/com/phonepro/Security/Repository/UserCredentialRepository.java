package com.phonepro.Security.Repository;

import com.phonepro.Security.Model.UserCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserCredentialRepository  extends JpaRepository<UserCredential,Long> {
    Optional<UserCredential> findByName(String username);
    List<UserCredential> findByEmail(String email);

    @Query("select u from UserCredential u where u.email = ?1")
    Optional<UserCredential> findByEmailId(String email);

    List<UserCredential> findByRole(String role);
}
