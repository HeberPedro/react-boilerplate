import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
)

export default Routes
