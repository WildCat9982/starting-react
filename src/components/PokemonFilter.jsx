import React from 'react';
import styled from '@emotion/styled'
import useStore from '../store';

const PokemonFilter = () => {
  const filter = useStore(state => state.filter);
  const setFilter = useStore(state => state.setFilter);
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