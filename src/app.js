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

console.log('test');


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



