import React from "react";
import Header from "./Header";
export default function Form({
  values,
  change,
  disabled,
  errors,
  submit,
}) {

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };
  
    const onChange = (evt) => {
      const { name, value, type, checked } = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };
    return(
      <div>
    <Header />
    <form onSubmit={onSubmit}>
    <div>
      <h2>Buid Your Own Pizza</h2>
      <h3>Choice of Size</h3>
      <h4>Required</h4>
        <select className='dropdown'onChange={onChange} value={values.size} name="size">
          <option value=""> Select </option>
          <option value="xtrasmall">XtraSmall</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
    </div>
  <div>
      <h3>Add Toppings</h3>
      <h4>Choose up to 5</h4>
      <label>
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>

      <label>
        Sausage
        <input
          type="checkbox"
          name="sausage"
          checked={values.sausage}
          onChange={onChange}
        ></input>
      </label>

      <label>
        Pineapple
        <input
          type="checkbox"
          name="pineapple"
          checked={values.pineapple}
          onChange={onChange}
        ></input>
      </label>

      <label>
    Onions
        <input
          type="checkbox"
          name="onions"
          checked={values.onions}
          onChange={onChange}
        ></input>
      </label>

      <label>
        Chicken
        <input
          type="checkbox"
          name="chicken"
          checked={values.chicken}
          onChange={onChange}
        ></input>
      </label>
    </div>
    <div>
    <div>
        <div>{errors.name}</div>
      </div>
    <label>
    Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
    <label>
    Special Instruction
    <div>{errors.special}</div>
          <input
            value={values.special}
            onChange={onChange}
            name="special"
            type="text"
          />
        </label>
    </div>
    <button className="confirm-butt" disabled={disabled}>Add to Order $20.00</button>
  </form>
  </div>
  );  
}