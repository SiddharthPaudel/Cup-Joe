package com.s3project.cupjoymanagement.rest;

import com.s3project.cupjoymanagement.pojo.Bill;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/bill")
public interface BillRest {
    @PostMapping("/generate-report")
    public ResponseEntity<String> generateReport(@RequestBody Map<String, Object> requestMap);
    @GetMapping
    public ResponseEntity<List<Bill>> getBills();
   
}
