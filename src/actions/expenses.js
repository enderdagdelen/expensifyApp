import {v4 as uuidv4} from 'uuid';


// Add Expense Generator
export const addExpense = ({description= '', notes= '', amount= 0, createdAt= 0} = {} ) => (
    {
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        notes,
        amount,
        createdAt
    }
})

// Remove Expense Generator
export const removeExpense = ({id}={}) => ({ //id içindefault değere gerek yoktur.
    type:'REMOVE_EXPENSE',
    id
})


//Edit Expense Generator
export const editExpense = (id,updates) => ( {
    type:'EDIT_EXPENSE',
    id,
    updates
} )

