package com.s3project.cupjoymanagement.restImpl;

import com.s3project.cupjoymanagement.constents.CafeConstants;
import com.s3project.cupjoymanagement.pojo.Category;
import com.s3project.cupjoymanagement.rest.CategoryRest;
import com.s3project.cupjoymanagement.service.CategoryService;
import com.s3project.cupjoymanagement.utils.CafeUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class CategoryRestImpl implements CategoryRest {
    private final CategoryService categoryService;
    @Override
    public ResponseEntity<String> addCategory(Map<String, String> requestMap) {
        try {
            return categoryService.addCategory(requestMap);
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return CafeUtils.getResponseEntity(CafeConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  
}
