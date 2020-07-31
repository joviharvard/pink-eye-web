import React from 'react'
import { Box, EyeBox, Eye } from './styles'

const Rating = ({ rating, invert }) => {
  return (
    <Box>
      <EyeBox>
        <Eye invert={invert} rating={rating} id={0} />
      </EyeBox>
      <EyeBox>
        <Eye invert={invert} rating={rating} id={1} />
      </EyeBox>
      <EyeBox>
        <Eye invert={invert} rating={rating} id={2} />
      </EyeBox>
      <EyeBox>
        <Eye invert={invert} rating={rating} id={3} />
      </EyeBox>
      <EyeBox>
        <Eye invert={invert} rating={rating} id={4} />
      </EyeBox>
    </Box>
  )
}

export default Rating
