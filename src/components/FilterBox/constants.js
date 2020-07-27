export const filterOptions = [
  {
    name: 'ALL REVIEWS',
    filter: null,
  },
  {
    name: 'ONLY THE BEST',
    filter: {
      rating: {
        gt: 4.0,
      },
    },
  },
  {
    name: 'I LIKE THEM BAD',
    filter: {
      rating: {
        lt: 2.0,
      },
    },
  },
]

export const regionOptions = [
  { value: 'EAST_ASIA', label: 'EAST ASIA' },
  { value: 'SOUTH_ASIA', label: 'SOUTH ASIA' },
  { value: 'MIDDLE_EAST', label: 'MIDDLE EAST' },
  { value: 'EUROPE', label: 'EUROPE' },
  { value: 'NORTH_AMERICA', label: 'NORTH AMERICA' },
  { value: 'AFRICA', label: 'AFRICA' },
  { value: 'LATIN_AMERICA', label: 'LATIN AMERICA' },
]
