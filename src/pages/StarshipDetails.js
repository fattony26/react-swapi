import { useLocation } from 'react-router'

function StarshipDetails() {
    let starship = useLocation().state.ship;

    return (
        <div className='detail'>
            <h1>{starship.name}</h1>
            <p><span>Manufacturer: </span> {starship.manufacturer}</p>
            <p><span>Model: </span>{starship.model}</p>
            <p><span>Class: </span>{starship.starship_class}</p>
            <p><span>Cost in Credits:</span>{starship.cost_in_credits}</p>
            <br/>
            <h3>Technical Specifics</h3>
            <p><span>Length: </span>{starship.length} meters</p>
            <p><span>Crew: </span>{starship.crew}</p>
            <p><span>Passengers: </span>{starship.passengers}</p>
            <p><span>Maximum Atmospheric Speed: </span>{starship.max_atmosphering_speed} kph</p>
            <a href='/'>Go Back</a>
        </div>
    )
}

export default StarshipDetails