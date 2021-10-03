import React, { useContext } from 'react';
import styled from '@emotion/styled'
import PokemonContext from '../PokemonContext'

const PokemonFilter = () => {
  const {filter, setFilter} = useContext(PokemonContext);
  return (
    <Input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
  )
}

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;


export default PokemonFilter;