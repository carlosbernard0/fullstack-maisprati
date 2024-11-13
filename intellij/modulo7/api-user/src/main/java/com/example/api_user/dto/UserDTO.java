package com.example.api_user.dto;

import lombok.Data;

@Data
public class UserDTO {
    private int idUser;
    private String userName;
    private String role;
    private String password;

}
