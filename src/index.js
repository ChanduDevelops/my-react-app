import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Box = (props) => (
  <>
      <h1>{props.age}</h1>
  </>
)

const App = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <Box {...props}/>
    </>
  )
}

root.render(
  <App name="Chandu" age="20" degree="B.Tech" />
);

