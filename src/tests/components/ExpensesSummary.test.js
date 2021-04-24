import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSumarry'

test('should correctly render expenses summary with 1 expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={235}/>)

    expect(wrapper).toMatchSnapshot()
})


test('should correctly render multiple expenses',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={235334}/>)

    expect(wrapper).toMatchSnapshot()
})