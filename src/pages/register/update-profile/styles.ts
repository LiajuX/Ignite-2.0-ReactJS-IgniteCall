import { Box, styled } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})
