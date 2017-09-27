import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './Calendar.css';

class Calendar extends Component{
    constructor(){
        super();
        const date = new moment();
        this.state = {
            selected: date,
            focus: date,
            view: "month",
        };
    }

    handleSelect(newDate) {
        let selected = moment(newDate);
        this.setState({ selected: selected });
    }

    previousMonth() {
        let focus = moment(this.state.focus).subtract(1, "month");
        this.setState({ focus: focus });
    }

    resetToday(){
        let focus = new moment();
        this.setState({ focus: focus });
    }

    nextMonth() {
        let focus = moment(this.state.focus).add(1, "month")
        this.setState({ focus: focus });
    }

    select(day) {
        let selected = this.state.selected;
        this.setState({ selected: selected });
    }

    renderWeeks(){
        let weeks = [];
        let count = 0;
        let startDate = moment(this.state.focus).startOf("month").startOf("week");
        while(count < 5){
            weeks.push(<Week key={startDate} date={startDate} />)
            startDate = moment(startDate).add(7, "days");
            count++;
        }
        return (
            weeks
        );
    }


    render(){
        return(
            <div>
                <div className="header">
                    <button onClick={ () => this.previousMonth() }>Previous</button>
                    <button onClick={ () => this.resetToday() }>Go to Today</button>
                    <button onClick={ () => this.nextMonth() }>Next</button>
                </div>
                <Moment date={this.state.focus} format={"MMMM YYYY"} /> 
                {this.renderWeeks()}
                
                <p>Selected: <Moment date={this.state.selected} format={"dddd MMM DD"}/></p>
            </div>
        )
    }
}

class Week extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate: moment(this.props.date).startOf("week"),
        }
    }

    render(){
        var days = Array(7).fill(null);
        var date = this.state.startDate;
        days = days.map(function(day, index){
            let thisDate = date;
            date = moment(date).add(1, "days");
            return (
                <div key={thisDate} className="dayBlock">
                    <Moment date={thisDate} format={"MMM DD"} />
                </div>
            );
        })
        
        return(
            <div className="weekBlock">
                {days}
            </div>
        )
    }
}

//Can be used in place of rendering the month directly in 'calendar' class.

// class Month extends Component{
//     renderWeeks(){
//         let weeks = [];
//         let count = 0;
//         let startDate = moment(this.props.focus).startOf("month").startOf("week");
//         while(count < 5){
//             weeks.push(<Week key={startDate} date={startDate} />)
//             startDate = moment(startDate).add(7, "days");
//             count++;
//         }
//         return (
//             weeks
//         );
//     }

//     render(){
//         return(
//             <div>
//                 <Moment date={this.props.focus} format={"MMMM"} /> 
//                 {this.renderWeeks()}
//             </div>
//         )
//     }
// }





export default Calendar