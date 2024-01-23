package com.s3project.cupjoymanagement.rest;

import com.s3project.cupjoymanagement.wrapper.ProductWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/product")
public interface ProductRest {
    @PostMapping("/add")
    public ResponseEntity<String> addProduct(@RequestBody Map<String, String> requestMap);
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer id);
    
    @GetMapping("/get/{id}")
    public ResponseEntity<ProductWrapper> getById(@PathVariable Integer id);

    @GetMapping("/get")
    public ResponseEntity<List<ProductWrapper>> getAllProducts();
}
