export class Budget{
    budgetId!: number;
    customer_id!: number;
    lastAmountPaid: number | undefined;
    totalDue: number | undefined;
    interest: number | undefined;
    goals: string | undefined;
    payments: number | undefined;
}