package com.s3project.cupjoymanagement.rest;

import com.s3project.cupjoymanagement.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@RequestMapping("/user")
public interface  UserRest {

    @PostMapping (path="/signup")
    public ResponseEntity<String> signUp(@RequestBody(required=true) Map<String,String> requestMap);

    @GetMapping("/check-token")
    public ResponseEntity<String> checkToken();
    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody Map<String, String> requestMap);
        @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> requestMap);


}
