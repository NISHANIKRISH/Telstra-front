import { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(null);
  const [resp, setResponse] = useState(null);
  const [err, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters with atleast 1(letter,number and special character!)",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    const data = { email, password };
    console.log(data);
    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
        console.log(response);
        setStatus("Success");
        setResponse(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.message);
        setStatus("error");
        setError(error.response.data.message);
        setIsLoading(false);
      });
    console.log(resp);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button disabled={isLoading}>{isLoading ? 'Loading...' : 'Login'}</button>
        <p className="mt-3">Don't have an account?<a href="/Signup">Signup</a></p>
      </form>
      {status === "Success" && <div>{resp}</div>}
      {status === "error" && <div>{err}</div>}
    </div>
  );
};

export default Login;
