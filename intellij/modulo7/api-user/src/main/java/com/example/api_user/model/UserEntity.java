package com.example.api_user.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class UserEntity {
    @Id
    private int id;
    @Column(nullable = false, name = "name_user")
    private String userName;

    @Column(nullable = false, name = "password_user")
    private String password;

    @Column(nullable = false, name = "mail_user")
    private String mail;

    @Column(nullable = false, name = "role_user")
    private String role;
}
