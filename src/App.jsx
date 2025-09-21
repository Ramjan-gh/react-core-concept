import './App.css'
import ToDo from './todo';

function App() {
  
  const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>
      <ToDo task="Learn React" isDone ={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone ={false} ></ToDo>
      <ToDo task="Take a shower" isDone ={true} ></ToDo>
      {/* <Students name="Ramjna" dept="CSE"></Students>
      <Students name="Hridoy" dept="EEE"></Students>
      <Person></Person>
      <ToDo task="Learn React" isDone ={true} ></ToDo>
      <Developer name="Mojumdar" tech="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer> */}
    </>
  )

  function Developer(props){
    console.log(props);
    return(
      <div style={{
        border: '2px solid green',
        borderRadius: '20px',
        margin: '10px'
      }}>
        <h3>Developer: {props.name}</h3>
        <p>Technology: {props.tech}</p>
      </div>
    )
  }



  function Person (){
    const age = 17;
    const name = 'Hridoy';

    const personStyle = {
      color: 'red',
      textAlign: 'right'
    }
    return (
      <p style={personStyle}>{name} is a person {age}</p>
    )
  }
}

function Sports(){
  return(
    <div>
      <h1>Cricket</h1>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}
function Students(props){
  return(
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Department: {props.dept}</p>
    </div>
  )
}

export default App
