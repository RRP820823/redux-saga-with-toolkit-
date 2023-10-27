import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Feature/counterSlice";
import { getCatsFetch } from "./Feature/catSlice";
function App() {
  const counter = useSelector((state: any) => state.counter);

  const cats = useSelector((state: any) => state.cats.cats);

  console.log(cats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  function handelAdd() {
    dispatch(add());
  }

  return (
    <div>
      <ul>
        {cats &&
          cats.map((c: { [key: string]: any }) => (
            <li>
              <p>{c.name}</p>
              <img width={200} height={200} src={c.image} alt="" />
            </li>
          ))}
      </ul>
      helo {counter}
      <button onClick={handelAdd}>add</button>
    </div>
  );
}

export default App;
