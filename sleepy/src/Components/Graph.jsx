import "../Style/Graph.css";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {useState} from "react";

function Graph(){

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
  );

  //1週間のグラフ
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    }
  };

  const labels1 = ["月", "火", "水", "木", "金", "土", "日"];
  const data1 = [6, 5, 6, 5, 5, 8, 8];

const data = {
  labels:labels1, // x軸のラベルの配列
  datasets: [
    {
      label: "睡眠時間", // 凡例
      data: data1,        // データの配列(labelsと要素数同じ)
      backgroundColor: "rgba(53, 162, 235, 0.5)" // グラフの棒の色
    },

  ]
};
 //１か月のグラフ
 const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    }
  }
};

const labels2 = ["月", "火", "水", "木", "金", "土", "日"];
const data2 = [5, 5, 5, 5, 5, 8, 8];

const data_2 = {
labels:labels2, // x軸のラベルの配列
datasets: [
  {
    label: "睡眠時間", // 凡例
    data: data2,        // データの配列(labelsと要素数同じ)
    backgroundColor: "rgba(53, 162, 235, 0.5)" // グラフの棒の色
  },

]
};
//3か月のグラフ
const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    }
  }
};

const labels3 = ["月", "火", "水", "木", "金", "土", "日"];
const data3 = [2, 5, 6, 10, 2, 8, 8];

const data_3 = {
labels:labels3, // x軸のラベルの配列
datasets: [
  {
    label: "睡眠時間", // 凡例
    data: data3,        // データの配列(labelsと要素数同じ)
    backgroundColor: "rgba(53, 162, 235, 0.5)" // グラフの棒の色
  },

]
};

const [selectedOption, setSelectedOption] = useState('options1');

const [btn1Clicked, setBtn1Clicked] = useState(false);
const [btn2Clicked, setBtn2Clicked] = useState(false);
const [btn3Clicked, setBtn3Clicked] = useState(false);


const handleBtn1Click = () => {
  setSelectedOption('options1');
  setBtn1Clicked(true);
  setBtn2Clicked(false);
  setBtn3Clicked(false);
};
const handleBtn2Click = () => {
  setSelectedOption('options2');
  setBtn1Clicked(false);
  setBtn2Clicked(true);
  setBtn3Clicked(false);
};
const handleBtn3Click = () => {
  setSelectedOption('options3');
  setBtn1Clicked(false);
  setBtn2Clicked(false);
  setBtn3Clicked(true);
};

  return (
    <div className="Graph">
      <h1>グラフ</h1>
      <div className="graph_area">
      {selectedOption === 'options1' && <Bar options={options1} data={data} />}
        {selectedOption === 'options2' && <Bar options={options2} data={data_2} />}
        {selectedOption === 'options3' && <Bar options={options3} data={data_3} />}
      </div>
      <div className="btn_area">
      <button
          className={`btn1 ${btn1Clicked ? 'clicked' : ''}`}
          onClick={handleBtn1Click}
        >
          １週間
        </button>
        <button
          className={`btn2 ${btn2Clicked ? 'clicked' : ''}`}
          onClick={handleBtn2Click}
        >
          １か月
        </button>
        <button
          className={`btn3 ${btn3Clicked ? 'clicked' : ''}`}
          onClick={handleBtn3Click}
        >
          ３か月
        </button>

      </div>

    </div>
  );
}
export default Graph;