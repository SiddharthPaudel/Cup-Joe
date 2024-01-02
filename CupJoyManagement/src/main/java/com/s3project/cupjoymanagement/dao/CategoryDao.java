package com.s3project.cupjoymanagement.dao;

import com.s3project.cupjoymanagement.pojo.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryDao extends JpaRepository<Category, Integer> {
    List<Category> getCategories();
}
