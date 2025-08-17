package com.learnhub.service;

import com.learnhub.dto.AuthResponse;
import com.learnhub.dto.LoginRequest;
import com.learnhub.dto.RegisterRequest;
import com.learnhub.model.User;
import com.learnhub.repository.UserRepository;
import com.learnhub.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities("ROLE_" + user.getRole().name())
                .build();
    }
    
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setRole(User.Role.STUDENT);
        
        User savedUser = userRepository.save(user);
        
        String token = jwtTokenProvider.generateToken(savedUser.getEmail());
        
        return new AuthResponse(token, savedUser.getId(), savedUser.getEmail(), 
                               savedUser.getFirstName(), savedUser.getLastName(), 
                               savedUser.getRole().name());
    }
    
    public AuthResponse login(LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));
            
            String token = jwtTokenProvider.generateToken(user.getEmail());
            
            return new AuthResponse(token, user.getId(), user.getEmail(), 
                                   user.getFirstName(), user.getLastName(), 
                                   user.getRole().name());
        } catch (Exception e) {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
