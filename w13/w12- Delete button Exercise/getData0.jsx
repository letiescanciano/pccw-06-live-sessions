const App = () => {
  const { useState } = React;

  const [list, setList] = useState([1, 2, 3, 4]);

  // const handler = (index) => {
  //   let newState = state.filter((item) => item != index);
  //   console.log(newState);
  //   setState(newState);
  // };
  // let list = state.map((item, index) => {
  //   return <MyButton onClick={() => handler(item)} key={index}></MyButton>;
  // });

  const deleteButton = (index) => {
    console.log("deleteButton firing");
    // console.log(index);
    const newList = list.filter((element, idx) => idx !== index);
    console.log(newList);
    setList(newList);
  };

  return list.map((element, index) => {
    return (
      <MyButton onClick={() => deleteButton(index)} key={index}>
        {element}{" "}
      </MyButton>
    );
  });
};
const MyButton = ({ onClick, children }) => {
  let { Button } = ReactBootstrap;
  return <Button onClick={onClick}>{children}</Button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
