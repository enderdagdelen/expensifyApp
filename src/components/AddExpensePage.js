import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

//Burada export etme sebebimiz bu componenti test ederken redux'e bağlanmamış olmasını istediğimizden.
export class AddExpensePage extends React.Component{

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/')
    }

    render(){
        return(
            <div>

                <h1>Add Expense Page</h1>

                <ExpenseForm 
                    onSubmit = {this.props.onSubmit}
                />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)



/* test aşamasında alttaki kodu üsttteki koda çevirdik sebebi vb notlarda yazıyor. not:15
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
        onSubmit = {(expense)=>{

            props.dispatch(addExpense(expense));
            props.history.push('/');
        }} 
        />
    </div>
)




export default connect()(AddExpensePage);

*/