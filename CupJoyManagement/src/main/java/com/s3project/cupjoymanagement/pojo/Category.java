package com.s3project.cupjoymanagement.pojo;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@NamedQuery (name = "Category.getCategories", query = "select c from Category c")

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "category")
public class Category implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
}
