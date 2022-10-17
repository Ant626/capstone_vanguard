package com.capstoneProject.capstone.Controllers;

import com.capstoneProject.capstone.Exceptions.ResourceNotFoundException;
import com.capstoneProject.capstone.Models.Budget;
import com.capstoneProject.capstone.Repos.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(
        origins = {"http://localhost:4200"}
)
@RestController
@RequestMapping
public class BudgetController {
    @Autowired
    private BudgetRepo budgetRepo;

    public BudgetController(BudgetRepo budgetRepo) {
        this.budgetRepo = budgetRepo;
    }

    @GetMapping({"fundingforce/budget"})
    public List<Budget> list() {
        return this.budgetRepo.findAll();
    }

    @GetMapping({"fundingforce/budget/{budgetId}"})
    public Optional<Budget> getBudgetById(@PathVariable Long budgetId){
        return this.budgetRepo.findById(budgetId);
    }


    @PostMapping("fundingforce/budget")
    public Budget createBudget(@RequestBody Budget budget){
        return budgetRepo.save(budget);
    }

    @DeleteMapping("fundingforce/budget/{id}")
    public void deleteBudgetById(@PathVariable Long id){
        budgetRepo.deleteById(id);
    }

    @PatchMapping({"fundingforce/payments/{budgetId}"})
    public Budget updatePayments(@RequestParam Double userInput, @PathVariable Long budgetId, @RequestBody Budget budget){
        Budget budgets = (Budget)this.budgetRepo.findById(budgetId).orElseThrow(() -> {
            return new ResourceNotFoundException("Budget does not exist with id : " + budgetId);
        });
        budgets.setLastAmountPaid(userInput);
        budgets.setTotalDue(budget.getTotalDue() - userInput);
        budgets.setPayments(budget.getPayments() + 1);
        return budgetRepo.save(budgets);
    }
}


