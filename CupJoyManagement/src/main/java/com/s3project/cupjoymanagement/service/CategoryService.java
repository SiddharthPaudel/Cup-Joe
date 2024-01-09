package com.s3project.cupjoymanagement.service;

import com.s3project.cupjoymanagement.pojo.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface CategoryService {
    ResponseEntity<String> addCategory(Map<String, String> requesttap);
    ResponseEntity<List<Category>> getCategories(String filterValue);

  
}
