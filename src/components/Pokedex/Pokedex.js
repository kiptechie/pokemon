import React, { Component } from 'react';
import '../Pokedex/Pokedex.css'
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends Component {
    render() {
        const pokemon = this.props.pokemon;
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner"> Winning Hand </h1>;
        } else {
            title = <h1 className="Pokedex-loser"> Losing Hand </h1>;
        }
        return (
             <div className="Pokedex">
                 {title}
                 <h4 className="Pokedex-title"> Total Experience: {this.props.exp} </h4>
                 <div className="Pokedex-cards">
                 {pokemon.map((p) => (
                     <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                 ))}
                 </div>
             </div>
        );
    }
}

export default Pokedex;