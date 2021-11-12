import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import * as apiService from '../services/api-calls.js'
import './App.css';
import NavBar from './NavBar'

class StarHome extends Component {
    state = {
        starships: []
    }

    componentDidMount() {
        apiService.getAllStarShips()
            .then(starships => this.setState({
                starships
            }))
    }

    render() {
        return (
            <>
                <NavBar />
                <div className="starShipContainer">
                    {
                        this.state.starships.map((ship, ind) => (
                            <Link
                                className='spaceShips'
                                key={ind}
                                to='shipDetail'
                                state={{ ship }}
                            >
                                {ship.name}
                            </Link>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default StarHome