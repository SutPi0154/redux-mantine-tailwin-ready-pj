import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/services/counterSlice";

const Home = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <p className=" text-3xl ">{value}</p>

      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
};

export default Home;
