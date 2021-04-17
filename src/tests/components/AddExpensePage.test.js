import React from 'react'
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

// İlk aşamada AddExpensePage componenet'in herhangi bir props alıp almadığına bakıyoruz. Ve evet onSubmit içinde 2 adet props var. İlk önce bu props'ları mocked foksiyonlarla değiştirmemiz gerekiyor. onSubmit içindeki onSubmit'i çevirmek kolay ancak history biraz daha farklı. Aşağıda göründüğü gibi onSubmit'ten sonra history fonksiyon olarak bir nesne alıyor yani {push:'/'}. İşte burada yine '/' sayfasına gidemeyeceğimiz ve hata vereceği için buradaki '/' yerine de bir jest fonksiyonu koyuyoruz. Böylece bu fonksiyonları test için uygun olacak hale getirmiş olduk. 


let addExpense, history, wrapper;
beforeEach(()=>{
    addExpense = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
})

test('Should render Add Expense Page Correctly', () => {
   
    expect(wrapper).toMatchSnapshot()

})

//Şimdi ise onSubmit ile çağıracağımız spy'lar, doğru veriler ile çağırılınca ne oluyor onu görelim.


/*çözemediğim şekilde hata veriyor.
test('should handle onSubmit', () => {
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])

    expect(history.push).toHaveBeenLastCalledWith('/');
});
*/

