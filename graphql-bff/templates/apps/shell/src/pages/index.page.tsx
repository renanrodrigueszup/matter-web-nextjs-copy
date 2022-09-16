
import { Button, Box } from '@citric/core'
import { useQuery } from '@apollo/client'
import { USERS } from 'queries/user'

export default function Web() {
  const { data } = useQuery<{ users: { name: string; age: number }[] }>(USERS)
  return (
    <div data-testid="web-page">
      <h1>Shell application</h1>
      {data?.users.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
      <SharedButton>Example of a shared component</SharedButton>
      <Box mt="5">
        <Button>Example Citric Button</Button>
      </Box>
    </div>
  )
}
