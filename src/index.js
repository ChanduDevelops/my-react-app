import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Box = () => {
  <>
    <div className='box'>
      <h1>Hello</h1>
    </div>
  </>
}

const App = () => {
  return (
    <>
      <Box />
    </>
  )
}

root.render(
  <App name="Chandu" age="20" degree="B.Tech" />
);

