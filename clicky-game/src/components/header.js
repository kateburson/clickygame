import React from 'react'
import { Header } from 'semantic-ui-react'

const HeaderExamplePage = (props) => (
  <div>
    <Header as='h1'>Clicky Game</Header>
    <Header as='h2'>Score: {props.score}</Header>
  </div>
)

export default HeaderExamplePage