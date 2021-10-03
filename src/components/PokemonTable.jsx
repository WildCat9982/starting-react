import React from 'react';
import PokemonRow from './PokemonRow'

const PokemonTable = ({pokemon, filter, setSelectedItem}) => (
    <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {pokemon
      .filter((pokemon) =>pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
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

export default PokemonTable;