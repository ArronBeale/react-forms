import { useRef, useState } from 'react'; // Use useRef or useState, not both. ref for submission, state for active validation

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, SetEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    SetEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; NOT IDEAL, DON'T MANIPULATE THE DOM if using ref

    SetEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
