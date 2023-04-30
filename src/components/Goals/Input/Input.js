import { useState } from "react";
import Button from "../../UI/Button/Button";
import  classes from "./Input.module.css"; // styles is an object having all classnames and id's in it 

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
      <div className={`${classes["form-control"]} ${valid? "":classes.invalid}`}>     {/* coz of class name "form-control" having '-' in it thats why we have used the format styles["form-control"] intead of default styles.form-control. Adding inValid class when valid==false otherwise add an empty string */}
        <label>Daily Goals</label>
        <input type="text" value={input} onChange={inputHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
