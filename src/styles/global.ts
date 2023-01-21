import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    '&::-webkit-scrollbar': {
      width: '6px',
    },

    '&::-webkit-scrollbar-track': {
      width: '6px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',
      borderRadius: '24px',
    },
  },

  body: {
    color: '$gray100',
    backgroundColor: '$gray900',

    '--webkit-font-smoothing': 'antialiased',
  },
})
