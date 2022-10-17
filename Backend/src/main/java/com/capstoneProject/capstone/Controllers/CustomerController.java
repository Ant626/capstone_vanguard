//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.capstoneProject.capstone.Controllers;


import com.capstoneProject.capstone.Models.Customer;
import com.capstoneProject.capstone.Repos.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class CustomerController {

    @Autowired
    private CustomerRepo repository;

    @GetMapping("fundingforce/customer")
    public List<Customer> list(){

        return this.repository.findAll();
    }

    @GetMapping("fundingforce/customer/{customerId}")
    public Customer getCustomerById(@PathVariable Long customerId){

        return repository.findById(customerId).get();
    }

    @PostMapping("fundingforce/customer")
    public Customer createCustomer(@RequestBody Customer customer){

        return repository.save(customer);
    }
}
