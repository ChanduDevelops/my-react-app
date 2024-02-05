import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
// ]

// const me = {
//   name: "me",
//   mine: "me"
// }

const Skills = ({skills}) => {
  return skills.map(skill => <li>{skill[0]} {skill[1]}</li>)
}

const App = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <ul>
        <Skills skills={props.skills} />
      </ul>
    </>
  )
}

root.render(
  <App name="Chandu" age="20" degree="B.Tech" skills={[
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ]} />
);

