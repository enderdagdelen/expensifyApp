

const expensesReducerDefaultState = []

const expensesReducer = (state= expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':

            //return  state.concat(action.expense)
            return [
                ...state, //Burada state aslında bir array, action ise bir nesne ve nesnemiz bir adet yazı yani type ve bir adet nesneden oluşuyor. Yani expense. Burada state array'ı nesnelerden oluştuğu için içerisinine bu şekilde yeni nesnemizi ekliyoruz.
                action.expense
            ]
            

        case 'REMOVE_EXPENSE':

            return state.filter(({id})=>id !== action.id);    

            /* Bu Benim yaptığım ve sıkıntısız çalıştı.
            const newState= state.filter((exp)=>{
                return exp.id !== action.id
            })
            
            return newState; */
        case 'EDIT_EXPENSE':
            
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });

        default:
            return state;
    }
}

export default expensesReducer;