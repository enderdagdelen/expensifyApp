import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral';


export const ExpensesListItem = ({id,dispatch,description,amount,createdAt}) => (
    
    <div>
        <h3>Description:{description}</h3>
        <p>Amount:{numeral(amount).format('$0,0.00')}</p>
        <p>{moment(createdAt).format('D MMMM YYYY')}</p>
        <Link to={`/edit/${id}`} ><h3>Edit {description}</h3></Link>

    </div>
) 

const mapStateToProps = (state) => {
    return {
        expenses:state.expenses
    }
}

export default ExpensesListItem;

// ÖNEMLİ NOT
/* _______1_________
connect ile store'a component'i store'a bağladığımızda connect, 
dispatch fonksiyonunu da sanki state'ten gelirmiş gibi bizim state'in içine eklenir. Bir çeşit state'ten gelen properties ve connect'ten gelen property ve fonksiyonlar birleşirler, aynı kümelerdeki birleşim gibi. Bu sayede biz de dispatch'i destructured nesne içerisine yazdıktan sonra ancak component içerisinde kullanabiliyoruz. 

_________2__________
Bu videoya kadar dispatch'in sadece store ve props'lar ile kullanılabileceğini sanıyordum. Ama bu şekilde yalnız da kullanılabiliyormuş.

*/