package com.s3project.cupjoymanagement.restImpl;

import com.s3project.cupjoymanagement.constents.CafeConstants;
import com.s3project.cupjoymanagement.rest.ProductRest;
import com.s3project.cupjoymanagement.service.ProductService;
import com.s3project.cupjoymanagement.utils.CafeUtils;
import com.s3project.cupjoymanagement.wrapper.ProductWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ProductRestImpl implements ProductRest {
    private final ProductService productService;
    @Override
    public ResponseEntity<String> addProduct(Map<String, String> requestMap) {
        try {
            return productService.addProduct(requestMap);
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return CafeUtils.getResponseEntity(CafeConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  
    @Override
    public ResponseEntity<String> deleteProduct(Integer id) {
        try {
            return productService.deleteProduct(id);
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return CafeUtils.getResponseEntity(CafeConstants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

   

    @Override
    public ResponseEntity<ProductWrapper> getById(Integer id) {
        try {
            return productService.getById(id);
        } catch (Exception exception){
            exception.printStackTrace();
        }
        return new ResponseEntity<>(new ProductWrapper(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
