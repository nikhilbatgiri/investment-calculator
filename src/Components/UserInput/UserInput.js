import React, { useState } from 'react';
import classes from './UserInput.module.css'

function UserInput(props){

    const initialUserInputs = {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        duration: 10
    }

    const [userInput, setUserInput] = useState(initialUserInputs)

    function submitH(event){
        event.preventDefault();

        props.onCalculate(userInput);
    }

    function resetH(){
        setUserInput(initialUserInputs)
    }

    function inputChangeH(input, value){
        setUserInput((prevInput) => {
            return{
                ...prevInput,
                [input]: +value      /**Here, 'input' refers to the keys in useState above and it's corrsponding values */
            }

        })

    }

    return(
        <form onSubmit={submitH} className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings (INR)</label>
            <input onChange={(event)=>
                inputChangeH('current-savings',event.target.value)}
                value={userInput['current-savings']}
                type="number"
                id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (INR)</label>
            <input onChange={(event)=>
                inputChangeH('yearly-contribution',event.target.value)}
                value={userInput['yearly-contribution']}
                type="number"
                id="yearly-contribution" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event)=>
                inputChangeH('expected-return',event.target.value)}
                value={userInput['expected-return']}
                type="number"
                id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=>
                inputChangeH('duration',event.target.value)}
                value={userInput['duration']}       /**OR value={userInput.duration} */
                type="number"
                id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetH} type="reset" className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default UserInput;