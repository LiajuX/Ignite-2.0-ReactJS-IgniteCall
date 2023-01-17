import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  color: '$white',

  fontWeight: '$medium',
  textTransform: 'capitalize',

  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',

  color: '$gray200',

  button: {
    all: 'unset',

    borderRadius: '$sm',

    lineHeight: 0,

    cursor: 'pointer',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: 'gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray200',
    },
  },
})

export const CalendarBody = styled('table', {
  width: '100%',

  borderSpacing: '0.25rem',

  fontFamily: '$default',

  tableLayout: 'fixed',

  'thead th': {
    color: '$gray200',

    fontSize: '$sm',
    fontWeight: '$medium',
  },

  'tbody:before': {
    display: 'block',

    color: '$gray800',

    lineHeight: '0.75rem',

    content: '.',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  borderRadius: '$sm',

  background: '$gray600',

  aspectRatio: '1/1',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:disabled': {
    background: 'none',

    cursor: 'not-allowed',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
