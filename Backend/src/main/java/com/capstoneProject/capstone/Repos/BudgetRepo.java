package com.capstoneProject.capstone.Repos;

import com.capstoneProject.capstone.Models.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BudgetRepo extends JpaRepository<Budget, Long> {

}
