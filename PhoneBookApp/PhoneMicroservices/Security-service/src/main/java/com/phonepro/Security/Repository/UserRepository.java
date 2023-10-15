package com.phonepro.Security.Repository;

import com.phonepro.Security.Model.Enumerate.Role;
import com.phonepro.Security.Model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    List<User> findByRole(Role role);

    @Query("select u from User u where u.email = ?1")
    public List<User> checkPassword(@Param("email") String email);

    @Transactional
    @Query("select count(u) from User u where u.email = ?1")
    public List<Integer> isEmailExist(@Param("email") String email);

    @Transactional
    @Query("select count(u) from User u where u.phoneno = ?1")
    public List<Integer> isPhnoExist(@Param("phno") Long phoneno);
}