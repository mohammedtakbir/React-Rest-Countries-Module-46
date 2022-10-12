import { useEffect, useState } from 'react';
import './App.css';
// import Countries from './components/Countries/Countries';
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  //* step1---> Declaring state to save loaded data
  //? jehetu loaded data 1ta array asbe, tai default value or initial value hobe 1ta empty array [];
  const [countries, setCountries] = useState([]);
  //? ekhane countries er vitore loaded data set hobe (save loaded data to the countries);
  //? setCountries holo 1ta function

  //* step2---> writing useEffect()
  //? useEffect 2ta parameter ney
  //? 1st parameter ta hobe 1ta anonymous function and 2nd parameter ta hobe 1ta empty array []. 

  useEffect( ()=> {
  //* step3---> writing fetch() inside useEffect() and setting loaded data 
  
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  //* step4---> set loaded data to the state
  .then(data => setCountries(data)) //? countries (initial state variable) e loaded data paite hoile setCountries() function ke call kore data state e pathate hobe
  //? fetch er maddhome data load hoile setCountries(data) function call hobe and data useState() er moddhe jabe and oi data countries name (initial state variable) er moddhe value hisebe set hobe 

  }, [])
  return(
    <div>
      <h1>visiting country!</h1>
      <h3>available countries: {countries.length}</h3>
      {
        //* step5---> show data to the UI
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h4>Population: {props.population}</h4>
    </div>
  )
}



export default App;
