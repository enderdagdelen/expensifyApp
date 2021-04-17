import moment from 'moment'
import {setTextFilter,sortByAmount,sortByDate,setEndDate,setStartDate} from '../../actions/filters';



test('should set text filter with value',()=>{
    const result = setTextFilter('AnahtarKelime');

    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'AnahtarKelime'
    });
})


test('should set text with value', ()=>{
    const result = setTextFilter();
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})


test('should set sort to amount', ()=>{

    const result = sortByAmount()

    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    })

})


test('should set sort to date', ()=>{

    const result = sortByDate()

    expect(result).toEqual({
        type:'SORT_BY_DATE'
    })

})


test('should set startdate', ()=>{
    const result = setStartDate(moment(12345));

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate:moment(12345)
    })
})


test('should set enddate', ()=>{
    const result = setEndDate(moment(12345));

    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:moment(12345)
    })
})


