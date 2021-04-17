import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set expenses to empty array', () => {

    const state = expensesReducer(undefined, {type:'@@INIT'}) 

    expect(state).toEqual([])
})

test('should remove by id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }

    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }

    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],expenses[1], expenses[2]])
})



test('should add an expense', () => {
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            id:uuidv4(),
            description:'Tuitition Fees',
            notes:'Deadline is the end of this month',
            amount:10000,
            createdAt:moment(1617680163000)
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state.length).toBe(4)
})

test('should edit an expense', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'2',
        updates:{
            amount:45600
        }
    }

    const state = expensesReducer(expenses,action)

    expect(state[1].amount).toBe(45600)
})

test('Should not edit if id not found', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'-2',
        updates:{
            amount:45600
        }
    }

    const state = expensesReducer(expenses,action)

    expect(state).toEqual(expenses)
})
//should not edit expense if not found