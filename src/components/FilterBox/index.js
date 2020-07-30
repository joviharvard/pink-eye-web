/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'
import Select from 'react-select'
import SingleFilter from '../SingleFilter'
import {
  Container,
  HeaderBox,
  Header,
  FilterContainer,
  Search,
  Bar,
  Button,
  Go,
} from './styles'
import { filterOptions, regionOptions } from './constants'
import { ROUTE_PATHS } from '../../utils/constants'
import SelectorButton from '../SelectorButton'
import theme from '../../theme'

const customStyles = {
  option: (provided, _state) => ({
    ...provided,
    background: theme.colors.pink,
    color: 'white',
    '&:active': {
      background: theme.colors.darkPink,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: '0px',
    fontFamily: theme.fonts.subheader,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
  dropdownIndicator: (provided, _state) => ({
    ...provided,
    border: '0px',
    color: 'white',
    background: theme.colors.red,
  }),
  indicatorsContainer: (provided, _state) => ({
    ...provided,
    border: '0px',
    background: theme.colors.red,
  }),
  clearIndicator: (provided, _state) => ({
    ...provided,
    border: '0px',
    color: 'white',
  }),
  indicatorSeparator: (provided, _state) => ({
    ...provided,
    display: 'none',
  }),
  multiValueLabel: (provided, _state) => ({
    ...provided,
    color: 'white',
    background: theme.colors.green,
    fontFamily: theme.fonts.subheader,
  }),
  multiValue: (provided, _state) => ({
    ...provided,
    color: 'white',
    background: theme.colors.green,
    fontFamily: theme.fonts.subheader,
    padding: '2px',
  }),
  input: (provided, _state) => ({
    ...provided,
    fontFamily: theme.fonts.subheader,
    '& input': {
      outline: 'none',
      font: 'inherit',
    },
  }),
  placeholder: (provided, _state) => ({
    ...provided,
    fontFamily: theme.fonts.subheader,
  }),
  noOptionsMessage: (provided, _state) => ({
    ...provided,
    color: 'white',
    fontFamily: theme.fonts.subheader,
  }),
  menu: (provided, _state) => ({
    ...provided,
    width: '100%',
    background: theme.colors.pink,
    fontFamily: theme.fonts.subheader,
  }),
}

const FilterBox = () => {
  const history = useHistory()
  const [showModal, setModal] = useState(false)
  const [region, changeRegion] = useState([])
  const [search, changeSearch] = useState('')
  const [selectedFilter, changeFilter] = useState(0)

  const otherFilters = (r, filter) => {
    if (r.length !== 0)
      return { ...filter, region: { in: r.map(({ value }) => value) } }
    return { ...filter }
  }

  const searchFunc = () => {
    history.push({
      pathname: ROUTE_PATHS.REVIEWS,
      state: {
        filter: {
          movieTitle: {
            matches: { pattern: search, caseSensitive: false },
          },
          ...otherFilters(region, filterOptions[selectedFilter].filter),
        },
      },
    })
  }

  return (
    <Container>
      <HeaderBox>
        <Header>What kind of movies do you like?</Header>
      </HeaderBox>
      <FilterContainer>
        <Search>
          <Bar
            placeholder="SEARCH"
            value={search}
            onChange={e => changeSearch(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                searchFunc()
              }
            }}
          />
          <Button onClick={() => searchFunc()}>
            <Go>GO</Go>
          </Button>
        </Search>
        {filterOptions.map(({ filter, ...rest }, index) => (
          <SingleFilter
            {...rest}
            selected={selectedFilter === index}
            onClick={() => {
              changeFilter(index)
              history.push({
                pathname: ROUTE_PATHS.REVIEWS,
                state: {
                  filter: {
                    movieTitle: {
                      matches: { pattern: search, caseSensitive: false },
                    },
                    ...otherFilters(region, filter),
                  },
                },
              })
            }}
          />
        ))}
        <SelectorButton
          name="FILTER BY REGION"
          indicator={region.length}
          onClick={() => setModal(true)}
        />
      </FilterContainer>
      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          setModal(false)
          searchFunc()
        }}
        style={{
          content: {
            top: '70%',
            left: '30%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            height: '320px',
            border: 'none',
            borderRadius: '0px',
            background: theme.colors.darkBlue,
            boxShadow: `4px 4px 0px 0px ${theme.colors.darkGreen}`,
            opacity: 1,
          },
          overlay: {
            background: 'rgba(232, 236, 241, 0.2)',
          },
        }}
      >
        <Select
          options={regionOptions}
          isMulti
          styles={customStyles}
          value={region}
          onChange={val => (val ? changeRegion(val) : changeRegion([]))}
        />
      </Modal>
    </Container>
  )
}

export default FilterBox
