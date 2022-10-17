package com.capstoneProject.capstone.Models;

import com.capstoneProject.capstone.Models.Budget;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Customers")
public class Customer {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE
    )
    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "income")
    private Double income;

    @Column(name = "savings")
    private Double savings;

    @Column(name = "user_name")
    private String userName;


    @JsonManagedReference
    @OneToMany(mappedBy = "customers")
    private List<Budget> budgets;
    public Customer(Long customerId,
                    String userName,
                    String firstName,
                    String lastName,
                    String email,
                    String password,
                    Double income,
                    Double savings) {
        this.customerId = customerId;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.income = income;
        this.savings = savings;
    }

    public String getPassword() { return password; }

    public String getUsername() { return userName; }


}