package com.phonepro.Feedbacks.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class    Feedbacks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long f_id;
    private Long phoneno;
    private String name;
    private String email;
    private String message;
    private String date;

}
