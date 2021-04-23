import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount, setStartDate,setEndDate} from '../actions/filters';
import { DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{
    
    state={
        calenderFocused:null
    }

    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calenderFocused) => {
        this.setState(()=>{
            return{
                calenderFocused:calenderFocused
            }
        })
    }

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e)=>{
        {e.target.value==='date' ? this.props.sortByDate():this.props.sortByAmount()}
    }

render(){

    return(

        <div>
            <input type='text' value={this.props.filters.text} onChange= {this.onTextChange} />

            <select onChange={this.onSortChange}>
                <option value="date" >Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker
                startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
            />
        </div>
    )
}

}

const mapPropsToState = (state) => {
return {
    filters:state.filters
}
}

//5 adet dispatch var yani 5 adet burada yeni dispatch tanımlamamız gerekiyor. 
const mapDispatchToProps = (dispatch) => {
    return{

        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))

    }

}

export default connect(mapPropsToState,mapDispatchToProps)(ExpenseListFilters);




/*

    DERS 126'DAN ÖNCEKİ KODUN HALİ. TEST İÇİN DEĞİŞTİRİLDİ

class ExpenseListFilters extends React.Component{
    
        state={
            calenderFocused:null
        }

        onDatesChange = ({startDate,endDate})=>{
            this.props.dispatch(setStartDate(startDate));
            this.props.dispatch(setEndDate(endDate))
        }

        onFocusChange = (calenderFocused) => {
            this.setState(()=>{
                return{
                    calenderFocused:calenderFocused
                }
            })
        }

    render(){

        return(

            <div>
                <input type='text' value={this.props.filters.text} onChange= {(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />

                <select onChange={(e)=>{
                    {e.target.value==='date' ? this.props.dispatch(sortByDate()):this.props.dispatch(sortByAmount())}
                }}>
                    <option value="date" >Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        )
    }

}

const mapPropsToState = (state) => {
    return {
        filters:state.filters
    }
}

export default connect(mapPropsToState)(ExpenseListFilters);

*/