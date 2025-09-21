import './App.css'

function App() {
  

  return (
    <>
      <h1>React Core Concepts</h1>
      <Students name="Ramjna" dept="CSE"></Students>
      <Students name="Hridoy" dept="EEE"></Students>
      <Person></Person>
      <Developer name="Mojumdar" tech="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
    </>
  )

  function 
  Developer(props){
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
