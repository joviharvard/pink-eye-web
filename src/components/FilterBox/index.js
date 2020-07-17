import React, { useState } from 'react'
import SingleFilter from '../SingleFilter'
import {
  Container,
  HeaderBox,
  Header,
  FilterContainer,
  Search,
  Bar,
  Button,
} from './styles'
import filterOptions from './constants'

const FilterBox = () => {
  const [selectedFilter, changeFilter] = useState(0)
  return (
    <Container>
      <HeaderBox>
        <Header>What kind of movies do you like?</Header>
      </HeaderBox>
      <FilterContainer>
        <Search>
          <Bar placeholder="SEARCH" />
          <Button />
        </Search>
        {filterOptions.map(({ ...rest }, index) => (
          <SingleFilter
            {...rest}
            selected={selectedFilter === index}
            onClick={() => changeFilter(index)}
          />
        ))}
      </FilterContainer>
    </Container>
  )
}

export default FilterBox
