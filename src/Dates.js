import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './Dates.css';

class Dates extends Component {
    constructor(){
        super();
        this.state = {
            focusDate: new Date(),
            month: moment().format("MMMM"),
        }

    }

    focusDateMinus(){
        let focusDate = moment(this.state.focusDate).subtract(1, "days");
        this.setState({ focusDate: focusDate });
    }

    focusDatePlus(){
        let focusDate = moment(this.state.focusDate).add(1, "days");
        this.setState({ focusDate: focusDate });
    }

    resetFocus(){
        this.setState({ focusDate: new Date() });
    }

    focusMonthMinus(){
        let focusDate = moment(this.state.focusDate).subtract(1, "month");
        this.setState({ focusDate: focusDate });
        
    }

    focusMonthPlus(){
        let focusDate = moment(this.state.focusDate).add(1, "month");
        this.setState({ focusDate: focusDate });
    }

    printDaysInMonth(){
        console.log("Print the days of the month!");
    }

    render(){
        return(
            <div id="dates">
                <div id="datesDisplay">
                    <h4>Focus Yesterday: <Moment date={this.state.focusDate} subtract={ {days: 1} } format={"dddd MMM DD"} /></h4>
                    <h4>Focus Today: <Moment date={this.state.focusDate} format={"dddd MMM DD"} /></h4>
                    <h4>Focus Tomorrow: <Moment date={this.state.focusDate} add={ {days:1} } format={"dddd MMM DD"} /></h4>
                    <h4>Focus Month: <Moment date={this.state.focusDate} format={"MMMM"} /></h4>
                    <h4>Focus Year: <Moment date={this.state.focusDate} format={"YYYY"} /></h4>
                </div>
                <div id="testDatesDisplay">
                    <h4>Start of month: <Moment date={moment(this.state.focusDate).startOf("month")} format={"dddd MMM DD"} /></h4>
                    <h4>End of Month: <Moment onClick={ () => console.log(moment().endOf("month")) }date={moment(this.state.focusDate).endOf("month")} format={"dddd MMM DD"} /></h4>

                </div>
                <div className="dateControls">
                    <button onClick={ () => this.focusMonthMinus() } > Month - </button>
                    <button onClick={ () => this.focusDateMinus() } > Day - </button>
                    <button onClick={ () => this.resetFocus() }>Reset</button>
                    <button onClick={ () => this.focusDatePlus() } > Day + </button>
                    <button onClick={ () => this.focusMonthPlus() } > Month + </button>
                </div> 
            </div>
        );
    }
}

export default Dates;