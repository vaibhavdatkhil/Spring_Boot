package com.marvellous.marvellousportal.Controller;

import com.marvellous.marvellousportal.Entity.AuthResponse;
import com.marvellous.marvellousportal.Entity.LoginRequest;
import com.marvellous.marvellousportal.Entity.RegisterRequest;
import com.marvellous.marvellousportal.Security.JwtUtil;        // ← NEW import
import com.marvellous.marvellousportal.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;                                    // ← NEW

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        AuthResponse response = userService.login(request);
        String token = jwtUtil.generateToken(response.getUsername()); // ← NEW
        response.setToken(token);                                      // ← NEW
        return ResponseEntity.ok(response);
    }
}