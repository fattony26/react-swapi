import { useLocation } from 'react-router'
import './App.css';
import NavBar from './NavBar';


function StarshipDetails() {
    let starship = useLocation().state.ship;

    return (
        <>
            <NavBar />
            <div className='detail'>
                <h1>{starship.name}</h1>
                <p><span>Manufacturer: </span> {starship.manufacturer}</p>
                <p><span>Model: </span>{starship.model}</p>
                <p><span>Class: </span>{starship.starship_class}</p>
                <br />
                <h3>Technical Specifics</h3>
                <p><span>Length: </span>{starship.length} meters</p>
                <p><span>Maximum Atmospheric Speed: </span>{starship.max_atmosphering_speed} kph</p>
                <br />
                <a href='/'>Go Back</a>
            </div>
        </>
    )
}

export default StarshipDetails