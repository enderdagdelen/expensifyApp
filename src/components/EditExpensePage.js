
import React from 'react';
import {connect} from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { Link } from 'react-router-dom';

export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/');

    }

    onRemove=()=>{
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                This is EditExpense Page
                <ExpenseForm 
                expense = {this.props.expense}
                onSubmit={this.onSubmit}/>
                <button type="button" onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}
    

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch, props)  => {
    return{
        editExpense: (id, expense)=> dispatch(editExpense(id,expense)),
        removeExpense:(data) => dispatch(removeExpense(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);





/* test zamanında ders 125'den önceki hali 
const EditExpensePage = (props) => {

    return (
        <div>
            This is EditExpense Page {props.match.params.id}
            <ExpenseForm 
            expense = {props.expense}
            onSubmit={(expense)=>{
                props.dispatch(editExpense(props.match.params.id,expense))
               
            }}/>
            <button type="button" onClick={()=>{
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(EditExpensePage);

*/
