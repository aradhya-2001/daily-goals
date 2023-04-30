import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./Input.css";

export default function Input(props) {
  const [input, updateInput] = useState("");
  const [valid, setValid] = useState(true);

  const inputHandler = (event) => {
    let currInput=event.target.value
    updateInput(currInput);
    if(currInput.trim().length>0){    /* on clicking add goal with empty input css changes but when we start typing that css should be gone.  */
      setValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(input);
    updateInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Daily Goals</label>
        <input type="text" value={input} onChange={inputHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
