const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return [values, handleChange];
};

function SignUp() {
  const [values, handleChange] = useForm({
    year: "Freshman",
    name: "",
    email: "",
    password: "",
    checkbox: false,
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values));
  };
  return (
    <>
      <h1>Hello</h1>
      <select name='year' value={values.year} onChange={handleChange}>
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input
        type='text'
        name='name'
        value={values.name}
        onChange={handleChange}
      />
      <div>Email</div>
      <input
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <div>Password</div>
      <input
        name='password'
        type='text'
        value={values.password}
        onChange={handleChange}
      />
      <div>
        <input
          type='checkbox'
          name='checkbox'
          value={values.checkbox}
          onChange={handleChange}
        />
        Remember me
      </div>
      <button onClick={submit}>Submit</button>
    </>
  );
}

ReactDOM.render(<SignUp />, document.getElementById("root"));
