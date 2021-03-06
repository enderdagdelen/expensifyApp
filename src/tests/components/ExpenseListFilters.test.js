import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { expenses } from '../fixtures/expenses';
import { filters, altFilters, altfilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter= jest.fn();
    sortByDate= jest.fn();
    sortByAmount= jest.fn();
    setStartDate= jest.fn();
    setEndDate= jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)

})

test('should render ExpenseListFilters correctly',() => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altfilters correctly',() => {

    wrapper.setProps({filters:altfilters})
    expect(wrapper).toMatchSnapshot()

})


test('should change text change', () => {
    wrapper.find('input').simulate('change',{
        target:{
            value:'rent'
        }})
    
    expect(setTextFilter).toHaveBeenLastCalledWith('rent')
})


test('should sortby amount', () => {

    wrapper.setProps({
        filters:altfilters
    })

    wrapper.find('select').simulate('change',{
        target:{
            value:'date'
        }
    })

    expect(sortByDate).toHaveBeenCalled();
})


test('should sortby date', () => {
    wrapper.find('select').simulate('change',{
        target:{
            value:'amount'
        }
    })

    expect(sortByAmount).toHaveBeenCalled();
})


test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8,'years');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate})

    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})


test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)

    expect(wrapper.state('calenderFocused')).toBe(calendarFocused)
})
 