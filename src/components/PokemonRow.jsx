import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


const PokemonRow = ({pokemon, onSelect}) => (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(',')}</td>
      <td>
        <Button variant="contained" color="primary" onClick={()=> onSelect(pokemon)}>MORE INFORMATIOn</Button>
      </td>
    </tr>
  )
  
  PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.shape({
        english: PropTypes.string
      }),
      type: PropTypes.arrayOf(PropTypes.string)
    }),
    onSelect:PropTypes.func
  }
  

  
 
  export default PokemonRow;