import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
// const paint = paintings[1]
// console.log()

// function Painting({url, title, height}) {
//   // console.log(props)
//   // const {url, title} = props
//   return (
//     <section>
//       <img src={url} width="700" />
//       <h2>{title}</h2>
//       <div>{height}Green card</div>
//       <div>USA</div>
//     </section>
//   )
// }
// ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
