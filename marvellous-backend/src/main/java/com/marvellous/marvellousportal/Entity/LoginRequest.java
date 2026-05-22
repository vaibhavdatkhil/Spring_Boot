package com.marvellous.marvellousportal.Entity;
import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}