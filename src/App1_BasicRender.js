import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Long";
  const age = 18;
  const isMale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ngô Tiến Long</p>
        <p>
          Xin chao {name} : {age} - {isMale ? "Male" : "Female"}
        </p>
        {/* boolean thì ko render trực tiếp dc mà phải làm nn */}
        {isMale ? <p>Male</p> : <p>Female</p>}
        {/* Hoặc nn */}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {/* Nếu muốn có nhiều object */}
        {isMale && (
          <div>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </div>
        )}
        {/* Nếu muốn in ra ko có thằng cha (thẻ div) */}
        {isMale && (
          <React.Fragment>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </React.Fragment>
        )}
        {/* Viết tắt React.Fragment */}
        {isMale && (
          <>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </>
        )}
        {/* Object ko dc render trực tiếp trên màn hình,render qua những object con */}
        <p>{student.name}</p>
        {/* Mảng thì dùng map loop qua các mảng */}
        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {" "}
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
