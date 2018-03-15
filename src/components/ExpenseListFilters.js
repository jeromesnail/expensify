import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortBy, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import * as filterActions from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onInputChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSelectChange = (e) => {
    this.props.sortBy(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onInputChange} />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSelectChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps, filterActions)(ExpenseListFilters);