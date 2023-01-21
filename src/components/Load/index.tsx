import { CircleNotch } from 'phosphor-react'

import { Container } from './styles'

interface LoadProps {
  size?: number
}

export function Load({ size = 64 }: LoadProps) {
  return (
    <Container title="Loading...">
      <CircleNotch size={size} />
    </Container>
  )
}
