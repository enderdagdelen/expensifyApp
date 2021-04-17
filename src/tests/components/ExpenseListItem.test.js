import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'



test('should return expense list item', () => {

    const wrapper = shallow(<ExpensesListItem {...expenses[0]}/>)

    expect(wrapper).toMatchSnapshot()
})


