import React from 'react';
import styled from '@emotion/styled'

const PokemonFilter = ({filter, setFilter}) => (
    <Input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
)

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;


export default PokemonFilter;