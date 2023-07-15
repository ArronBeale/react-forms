import { useRef, useState } from 'react'; // Use useRef or useState, not both. ref for submission, state for active validation

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, SetEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    SetEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; NOT IDEAL, DON'T MANIPULATE THE DOM if using ref

    SetEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
