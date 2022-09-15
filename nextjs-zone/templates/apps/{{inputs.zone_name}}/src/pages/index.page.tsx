import { Button } from '@citric/core'

export default function Web() {
  return (
    <div data-testid="web-page">
      <h1>Zone Application {{inputs.zone_name}} created</h1>
      
      <Button>Example Citric Button</Button>
    </div>
  )
}
