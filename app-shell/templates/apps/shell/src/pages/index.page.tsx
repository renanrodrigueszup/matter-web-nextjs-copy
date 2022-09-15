import { Button as SharedButton } from '@{{inputs.project_name}}/shared/components'
import { Button, Box } from '@citric/core'

export default function Web() {
  return (
    <div data-testid="web-page">
      <h1>Shell application</h1>
      <SharedButton>Example of a shared component</SharedButton>
      <Box mt="5">
        <Button >Example Citric Button</Button>
      </Box>
    </div>
  )
}
