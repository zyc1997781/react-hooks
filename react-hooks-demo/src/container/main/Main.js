import "./main.scss";
import React, { Fragment, useState, useContext, useEffect } from 'react';

import { PageContext } from "../../store/reducers"

export const Main = (props) => {

  const { dispatch } = useContext(PageContext);
  const { data } = useContext(PageContext);
  const [name, setName] = useState("Tom");

  useEffect(() => {
    console.log("第一次进入")
    return () => {
      console.log("第一次进入")
    };
  }, []);

  const setdate = () => {
    console.log(name)
    dispatch({ type: "main", data: { name: "jack" } })
    console.log(data)
  }

  return (
    <div>
      <div>{name}</div>
      <div>{data.txt || "--"}</div>
      <div onClick={setdate}>点击</div>
    </div>
  )
}