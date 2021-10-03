import React from 'react';
import PokemonContext from '../PokemonContext';
import PokemonRow from './PokemonRow'

const PokemonTable = () => {
  const {pokemon, filter, setSelectedItem} = React.useContext(PokemonContext)

  return (
      <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
        .filter(({name: {english}}) =>english.toLowerCase().includes(filter.toLowerCase()))
        .slice(0, 20)
        .map(pokemon => (
            <PokemonRow 
              pokemon={pokemon} 
              key={pokemon.id} 
              onSelect={(item) => setSelectedItem(item)} 
              />
        ))}
        </tbody>
    </table>
  )
}

export default PokemonTable;