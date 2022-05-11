import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  // Here I am creating a variable and a "set" method.
  // The "Set" method allows me to grab information from a userinput for example
  // and then save that value to the variable.
  // I can do this through a function that gets executed "onChage"
  // const [enteredYear, setEnteredYear] = useState('');

  // This is the onChange function that will allow us to execute the "set" function and 
  // store the target value in a variable.
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

    return(
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler} >
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
};

export default ExpenseFilter;