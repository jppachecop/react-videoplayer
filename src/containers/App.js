import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { VideoPlayer } from './VideoPlayer/VideoPlayer'
import { NotFound } from './NotFound/NotFound'
import { GlobalStyle } from '../styles/GlobalStyle'

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={VideoPlayer} />
        <Route exact path="/:activeVideo" component={VideoPlayer} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
)

export default App
