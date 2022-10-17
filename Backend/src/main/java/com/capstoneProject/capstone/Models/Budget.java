//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.capstoneProject.capstone.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name ="Budgets")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "budget_Id")
    private Long budgetId;

    @Column(name = "goals")
    private String goals;

    @Column(name = "lastAmountPaid")
    private Double lastAmountPaid;

    @Column(name = "totalDue")
    private Double totalDue;

    @Column(name = "payments")
    private double payments;

    @Column(name= "interest")
    private int interest;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customers_id", referencedColumnName = "customer_id")
    private Customer customers;

    public Budget() {

    }

    public Budget(Long budgetId, String goals, Double totalDue, Double payments, int interest, Double lastAmountPaid) {
        this.budgetId = budgetId;
        this.goals = goals;
        this.totalDue = totalDue;
        this.payments = payments;
        this.interest = interest;
        this.lastAmountPaid = lastAmountPaid;
    }
}

