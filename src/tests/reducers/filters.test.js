import moment from 'moment'
import filtersReducers from '../../reducers/filters';

test('should set up default filters', ()=>{
    //Burada state'in program başladığında default değerleri alıp almadığını test ediyoruz. Bu yüzden state yerine undefined yazıyoruz ki, state undefined verilerden oluşturulsun.
    const state = filtersReducers(undefined,{type:'@@INIT'});

    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})


test('should set sortBy to amount', () => {
    
    const state = filtersReducers(undefined, {type:'SORT_BY_AMOUNT'})
    // Burada bizim işimizi default state görüyor. nedeni ise default vaziyette sortBy değerinin date olması. Yani eğer sortBy değeri amount'a eşitse, değer reducer tarafından değiştirilmiş demektir. 
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    //burada dafault sortby değeri de date olduğu için eğer default state kullansak değişimi takip edemeyz. Bu yüzden de currentState'de sortBy değerini amount yapıyoruz ve sonradan değişip değişmediğini test ediyoruz. state kısmında undefined değil de yeni bir state kullanmamızın sebebi bu. 
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state = filtersReducers(currentState,{type:'SORT_BY_DATE'})

    expect(state.sortBy).toBe('date')

})


test('should set text filter', () => {

    const state = filtersReducers(undefined,{type:'SET_TEXT_FILTER', text:'anahtarkelime'})

    expect(state.text).toBe('anahtarkelime');
})

test('should set startdate', () => {

    const state = filtersReducers(undefined,{type:'SET_START_DATE', startDate:moment(1617607307000)})

    expect(state.startDate).toEqual(moment(1617607307000))
})

test('should set enddate', () => {

    const state = filtersReducers(undefined,{type:'SET_END_DATE', endDate:moment(1617607307000)})

    expect(state.endDate).toEqual(moment(1617607307000))
})