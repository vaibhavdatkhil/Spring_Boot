package com.marvellous.marvellousportal.Service;

import com.marvellous.marvellousportal.Entity.*;
import com.marvellous.marvellousportal.Exception.BatchNotFoundException;
import com.marvellous.marvellousportal.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail()))
            throw new BatchNotFoundException("Email already in use: " + request.getEmail());
        if (userRepository.existsByUsername(request.getUsername()))
            throw new BatchNotFoundException("Username already taken: " + request.getUsername());

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");
        userRepository.save(user);

        return new AuthResponse("Registration successful", user.getUsername(), user.getEmail(), user.getRole(), null);
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BatchNotFoundException("No account found for: " + request.getEmail()));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword()))
            throw new BatchNotFoundException("Invalid password");

        return new AuthResponse("Login successful", user.getUsername(), user.getEmail(), user.getRole(), null);
    }
}