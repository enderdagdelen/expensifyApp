import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'

import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {

    const wrapper = shallow(<ExpenseForm/>)

    expect(wrapper).toMatchSnapshot()
})



test('should render ExpenseForm with expense data', () => {

    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/> )

    expect(wrapper).toMatchSnapshot()

})


test('should render error for invalid form submission', () => {

    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{ }
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
})



test('should set description on input change', () => {

    const wrapper = shallow(<ExpenseForm/>);
    
    wrapper.find('input').at(0).simulate('change',{
        target:{value:"New Description"}
        //Burada tabi normal değer giremediğimiz için bu şekilde değer atamış oluyoruz.
    })

    expect(wrapper.state('description')).toBe('New Description')

})


test('should set note on input change', () => {

    const wrapper = shallow(<ExpenseForm/>)

    wrapper.find('textarea').simulate('change', {
        target:{
            value:"New Note is Here"
        }
    })

    expect(wrapper.state('note')).toBe("New Note is Here")
})


test('should set amount if valid input', () => {

    const wrapper = shallow(<ExpenseForm/>)

    wrapper.find('input').at(1).simulate('change', {
        target:{
            value:"23.50"
        }
    })

    expect(wrapper.state('amount')).toBe("23.50")
})


test('should set amount if valid input', () => {
    const num = (23.50).toString()
    const wrapper = shallow(<ExpenseForm/>)

    wrapper.find('input').at(1).simulate('change', {
        target:{
            value:num
        }
    })

    expect(wrapper.state('amount')).toBe(num)// kod içinde bu değer regex ile kontrol edildiği için ve regex sadece string kontrol ettiği için böyle
})


test('should set amount if valid input', () => {
    const num = "twentyfive"
    const wrapper = shallow(<ExpenseForm/>)

    wrapper.find('input').at(1).simulate('change', {
        target:{
            value:num
        }
    })

    expect(wrapper.state('amount')).toBe("")// kod içinde bu değer regex ile kontrol edildiği için ve regex sadece string kontrol ettiği için böyle
})



test('should call onSubmit prop for valid form submission', () => {
    //Bu bizim oluşturduğumuz fonksiyonu, componenet içiçndeki başka bir fonksiyon yerine kullanabiliyoruz
    const onSubmitSpy = jest.fn();

    //Burada onSubmit yerine kullanılıyor. 
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

    //Burada default iptal ediliyor
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })

    //Sıkıntı olmadığı sürece error state'i boş kalacaktır
    expect(wrapper.state('error')).toBe('');

    //Burada ise onSubmitSpy fonksiyonu bu veriler ile çağırılıyor. Ve çağrılğığında hata verip vermediği anlaşılıyor. expense[0] verileri zaten elimizde karşılaştıracağımız veriler olup, kendi girdiğimiz onSubmitSpy ile aynı veriler girildiğinde bi farklılık oluşuyor mu onu görmeye çalışıyoruz.
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount: expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});


//Burada yeni birşey öğreniyoruz. o da enzyme e ait prop. Direk bir componenet'in prop'unu bu şekilde çekip işlem yapabiliyor mu yapamıyor mu görebiliyoruz. 
//Ayrıca SingleDatePicker'in bu şekilde seçilmesinin sebebi ise bu component'in aynen bu şekilde yani withStyles(SingleDatePicker) şeklinde render edilmesidir. Haliyle ararken de bu şekilde arıyoruz. 
test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});


test('should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toBe(focused)
})