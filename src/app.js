// React - ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
//React-Redux
import { Provider } from 'react-redux';
//Roters
import AppRouter from './routers/AppRouter';

//redux 
import configureStore from './store/configureStore';
import {addExpense, editExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//css-scss-normalize
import 'normalize.css/normalize.css'; 
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

store.dispatch(addExpense({description:"Water Bill",amount:4500}));
store.dispatch(addExpense({description:"Gass Bill",createdAt:1000}));
store.dispatch(addExpense({description:"Rent", amount:109500}));




const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



