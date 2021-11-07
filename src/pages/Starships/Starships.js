import React, { Component } from 'react';
import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom';

class Starships extends Component {
    state = {
        starships: [],
    };
    async componentDidMount()
    {
        const starships = await getAllStarships();
        this.setState({
            starships: starships.results
        });
    }

    render() {
        return (
            <>
                <h3>Starships</h3>
                {this.state.starships.map((starship) => (
                    <div key={starship.index}>
                        <Link
                        to={{
                            pathname: `/starships`,
                            state: { starship },
                        }}
                        >
                        {starship.name}
                        </Link>
                    </div>
                ))}
            </>
        )
    }
}

export default Starships