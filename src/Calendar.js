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
        };
    }

    previousMonth() {
        let focus = moment(this.state.focus).subtract(1, "month");
        this.setState({ focus: focus });
        console.log(this.state.focus)
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
            weeks.push(<Week key={count} date={startDate} />)
            startDate = moment(startDate).add(7, "days");
            count++;
        }
        return (
            weeks
        )
    }

    render(){
        return(
            <div>
                <div className="header">
                    <button onClick={ () => this.previousMonth() }>Previous</button>
                    <Moment date={this.state.focus} format={"MMMM"} />
                    <button onClick={ () => this.nextMonth() }>Next</button>
                    {this.renderWeeks()}
                </div>
                
                <p>Selected: <Moment date={this.state.selected} format={"dddd MMM DD"}/></p>
            </div>
        )
    }
}

class Week extends React.Component {
    constructor(props){
        super(props);
        this.state={
            startDate: moment(this.props.date).startOf("week"),
        }
        console.log(this.state.startDate);
    }

    render(){
        var days = Array(7).fill(null);
        var date = this.state.startDate;
        days = days.map(function(day, index){
            let thisDate = date;
            date = moment(date).add(1, "days");
            return (
                <div key={thisDate} className="dayBlock">
                    <Moment date={thisDate} format={"dddd MMM DD"} />
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





export default Calendar