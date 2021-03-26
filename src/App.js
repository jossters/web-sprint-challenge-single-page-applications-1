import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import * as yup from "yup";
import Home from "./components/Home";
import Form from "./components/Form";
import schema from "./validation/formShema";
import initialFormValues from "./Static/initials";
import initialFormErrors from "./Static/initials";
import initialDisabled from "./Static/initials";

export default function App() {
//State
const [order, setOrder] = useState({})
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };
  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      pineapple: formValues.pineapple,
      onions: formValues.onions,
      chicken: formValues.chicken,
    }
    setOrder(newOrder);
    setFormValues(initialFormValues)
    return order;
  }
  
  useEffect(() => {
    schema
    .isValid(formValues)
    .then((valid) => {
      setDisabled(!valid);
    });
  },[formValues]);

  return (
        <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
     <Route >
     <Form
        values={formValues}
        change={inputChange}
        submit={orderSubmit}
        disabled={disabled}
        errors={formErrors}
        exact path="/Form"
      />
      </Route>
      
      </Switch>
    </div>
  );
};
