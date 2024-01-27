package com.s3project.cupjoymanagement.rest;
import com.s3project.cupjoymanagement.pojo.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/category")
public interface CategoryRest {
    @PostMapping("/add")
    public ResponseEntity<String> addCategory(@RequestBody Map<String, String> requestMap);

    @GetMapping("/get")
    public ResponseEntity<List<Category>> getCategories(@RequestParam(required = false) String filterValue);
    
}
