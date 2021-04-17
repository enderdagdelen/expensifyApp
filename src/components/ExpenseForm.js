
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
//date picker 
import { SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import { isInclusivelyBeforeDay } from 'react-dates';
//date picker

const now = moment();
//console.log(now.format('MMM Do, YYYY'));
 
class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? props.expense.amount.toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
            calenderFocused:false,
            error:''
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>{
            return {
                description:description
            }
        })
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>{
            return {
                note:note
            }
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount:amount
                }
            })
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>{
                return {
                    createdAt:createdAt
                }
            })
        }
        
    }

    onFocusChange = ({focused}) => {
        this.setState(()=>{
            return {
                calenderFocused:focused
            }
        })
    }

    onSubmit = (e) =>{
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return {
                    error:"Please Provide Description and Amount"
                }
            })
        }else{
            this.setState(()=>{
                return {
                    error:''
                }
            })            
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10),
                note:this.state.note, 
                createdAt:this.state.createdAt.valueOf()
            })
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                {this.state.error && <p>{this.state.error}</p>}
                <form className="form-group" onSubmit={this.onSubmit}>
                    <input className="form-control" type="text" placeholder="Description" autoFocus
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}/>

                    <input 
                    className="form-control my-3" 
                    type="text" 
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day)=>false}
                    isOutsideRange={day =>
                        !day.isAfter(moment().subtract(1, "month")) ||
                        !isInclusivelyBeforeDay(day, moment())
                    }
                    />

                    <textarea 
                    className="form-control" 
                    placeholder="Add a note for your expenses"
                    value={this.props.note} 
                    onChange = {this.onNoteChange}></textarea>
                   
                    <button type='submit' className="btn btn-primary btn-block">Add Expense</button>
                </form>
            </div>
        )
    }

}

export default ExpenseForm;
