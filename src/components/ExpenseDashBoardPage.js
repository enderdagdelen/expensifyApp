import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSumarry from './ExpensesSumarry'


const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSumarry />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)


export default ExpenseDashboardPage;
