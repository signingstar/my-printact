import React from "react"
import { Route, IndexRoute, browserHistory } from 'react-router'

import MainContents from "./components/main_contents"
import Marketing from "./components/marketing"
import Flyer from "./containers/flyers"
import Banner from "./containers/banner"
import Broucher from "./components/broucher"

const routes = <Route path="/marketing" component={MainContents}>
      <IndexRoute component={Marketing} />
      <Route path="flyer" component={Flyer} />
      <Route path="banner" component={Banner} />
      <Route path="broucher" component={Broucher} />
    </Route>

export default routes
