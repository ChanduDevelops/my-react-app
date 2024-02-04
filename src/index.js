import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Box = (props) => (
  <>
    <div className='box'>
      <h1>{props.name}</h1>
    </div>
  </>
)

const App = () => {
  const name = "chandu"
  const age = 20
  const height = 5.9
  const degree = "B.Tech"
  return (
    <>
      <div
        name={name}
        age={age}
        height={height}
        degree={degree}
      >
      </div>
      <Box name={name} age={age} height={height} degree={degree}/>
    </>
  )
}

root.render(
  <App />
);

