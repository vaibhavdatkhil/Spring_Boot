package com.marvellous.marvellousportal.Entity;

import lombok.AllArgsConstructor;  // ← must exist
import lombok.Data;                // ← must exist
import lombok.NoArgsConstructor;   // ← must exist

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String message;
    private String username;
    private String email;
    private String role;
    private String token;
}