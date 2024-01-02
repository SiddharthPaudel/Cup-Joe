package com.s3project.cupjoymanagement.service;

import com.s3project.cupjoymanagement.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {
   

    public ResponseEntity<String> checkToken();

    public ResponseEntity<String> changePassword(Map<String, String> requestMap);

    public ResponseEntity<String> forgotPassword(Map<String, String> requestMap);
}
