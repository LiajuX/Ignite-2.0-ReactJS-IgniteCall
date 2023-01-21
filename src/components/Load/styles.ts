import { keyframes, styled } from '@ignite-ui/react'

const rotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    animation: `${rotate} 2.5s linear infinite`,
  },
})
