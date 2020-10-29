import * as React from 'react'
import { Route, Switch } from 'react-router'
import { INDEX_ROUTE, CREATE_ROUTE } from './routes-map'
import { Main } from '@/view/main'

export const Routes: React.FC = () => (
  <Switch>
    <Route path={INDEX_ROUTE} exact component={Main} />
    <Route path={CREATE_ROUTE} exact component={() => <div>123</div>} />
  </Switch>
)
