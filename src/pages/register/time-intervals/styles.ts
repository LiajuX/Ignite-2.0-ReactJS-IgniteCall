import { Box, styled, Text } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',
})

export const IntervalContainer = styled('div', {
  marginBottom: '$4',
  border: '1px solid $gray600',
  borderRadius: '$md',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },
})

export const IntervalDay = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const FormError = styled(Text, {
  marginBottom: '$4',

  color: '#F75A68',
})
