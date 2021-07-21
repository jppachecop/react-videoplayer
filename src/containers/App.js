import React from 'react'
import { VideoPlayer } from './VideoPlayer/VideoPlayer'
import { NotFound } from './NotFound/NotFound'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={VideoPlayer} />
      <Route exact path="/:activeVideo" component={VideoPlayer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
