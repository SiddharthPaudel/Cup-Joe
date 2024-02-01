package com.s3project.cupjoymanagement.rest;

import com.s3project.cupjoymanagement.wrapper.UserWrapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Map;

@RequestMapping("/user")
public interface  UserRest {
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Map<String, String> requestMap);
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> requestMap);
    @GetMapping("/get")
    public ResponseEntity<List<UserWrapper>> getAllUsers();
    @PostMapping("/update")
    public ResponseEntity<String> update(@RequestBody Map<String, String> requestMap);
    @GetMapping("/check-token")
    public ResponseEntity<String> checkToken();
    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody Map<String, String> requestMap);
        @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> requestMap);


}
