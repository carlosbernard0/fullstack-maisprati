package com.example.api_user.dto;

import com.example.api_user.enums.UserRole;

public record RegisterDTO(String userName, String password, UserRole role) {
}
