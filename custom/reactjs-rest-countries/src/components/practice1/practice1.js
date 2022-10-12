import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  //* step1--> declare state to save loaded data
  const [countries, setCountries] = useState([]);
  //* step2--> write useEffect()
  useEffect( () => {
    //* step3--> writing fetch() inside useEffect()
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    //* set loaded data to the state
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h1>All countries!!!</h1>
      <h2>available countries: {countries.length}</h2>
      {
        countries.map(country => console.log(country))
      }
      {
        //* step5--> show data to the UI
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  )
}
function Country(props){
  console.log(props.country.capital)
  const {name, area, capital, continents, altSpellings} = props.country;
  return(
    <div>
      <h3>{name.common}</h3>
      <h4>Capital: {(capital) ? capital : 'No capital found'}</h4>
      <h5>Area: {area}</h5>
      <h5>Continents: {continents}</h5>
      <h5>altSpellings: 
        <span>{altSpellings[0]}</span>,
        <span>{altSpellings[1]}</span>,
        <span>{altSpellings[2]}</span>
      </h5>
    </div>
  )
}









export default App;
