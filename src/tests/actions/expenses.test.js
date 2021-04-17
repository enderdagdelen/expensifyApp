

import {addExpense, removeExpense, editExpense} from '../../actions/expenses'


test('should set up remove expense action object',()=>{
    const action =  removeExpense({id:'abc123'});

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'})
})


//benim hazırladığım actionslarda devamlı olarak action içine nesne giriyor. Yani editExpense({id:"1234",updates:{asdasd:asdasd}}) gibi. Yni test içinde de değişikşlikler yapmam gerekecek.
test('should set up edit expense action object',()=>{
    const editaction = editExpense("1234", {amount:"350"})

    expect(editaction).toEqual({
        type:"EDIT_EXPENSE",
        id:"1234",
        updates:{
            amount:"350"
        }
    })
})


test('should set up add expense action object with provided values',()=>{

    const addaction = addExpense();

    expect(addaction).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:"",
            notes:"",
            amount:0,
            createdAt:0
        }
    })

})

test('should set up add expense action object ',()=>{

    const expenses = {
        description:'Sport Membership',
        amount:400,
        createdAt:1000,
        notes:"Hello"    
    }

    const addaction = addExpense(expenses);

    expect(addaction).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),   // id dinamik olduğu için string herhangi bir değeri kavul edebileceğimizi belirtiyoruz.
            ...expenses
        }
    })

})

