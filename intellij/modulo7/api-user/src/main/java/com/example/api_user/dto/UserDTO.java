package com.example.api_user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private int idUser;
    private String userName;
    private String mail;
    private String role;
    private String password;

    public UserDTO(int idUser, String userName, String mail) {
        this.idUser = idUser;
        this.userName = userName;
        this.mail = mail;
    }
}
