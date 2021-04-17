import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {

    const store = createStore(combineReducers(
        {
            expenses:expensesReducer,
            filters:filtersReducer
        }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    return store;

}

/*
                        NOTLAR
        expenses                    
    Expenses array olacak. İçinde nesneler olacak. Bu nesnelerin her biri expense olacak. Yani {description, amount, createdAt,id, note}

        filters
    Nesne olacak {text, sortBy(date or amount), startDate,endDate}

*/