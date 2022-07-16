import { Chart } from "react-google-charts";
import { useEffect, useState } from 'react'
import axios from "axios";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};
function Home() {
  const [count, setCount] = useState()
  useEffect(() => {
    fetch("/data").then(
      res => res.json()
    ).then(
      count => {
        setCount(data.result)
        console.log(count)
      }
    )
  },[])
  return (
    <>
    <Chart
      chartType="Bar"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
    <h1>hello  {count}</h1>
    </>
  );
}

export default Home;
