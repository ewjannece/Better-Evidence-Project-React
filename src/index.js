import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SearchResult from './views/search-result'
import ResourceMaps from './views/resource-maps'
import GetInvolved from './views/get-involved'
import FAQUpdate from './views/fa-update'
import RequestHelp1Update1 from './views/request-help-update1'
import FramegStaffPageUpdate from './views/frameg-staff-page-update'
import RequestHelp1Update from './views/request-help-update'
import ResultPage from './views/result-page'
import Search from './views/search'
import RequestHelp1aUpdate from './views/request-help1a-update'
import LandingPage from './views/landing-page'
import LandingPage1A from './views/landing-page1a'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SearchResult} exact path="/search-result" />
        <Route component={ResourceMaps} exact path="/resource-maps" />
        <Route component={GetInvolved} exact path="/get-involved" />
        <Route component={FAQUpdate} exact path="/fa-update" />
        <Route component={RequestHelp1Update1} exact path="/" />
        <Route
          component={FramegStaffPageUpdate}
          exact
          path="/frameg-staff-page-update"
        />
        <Route
          component={RequestHelp1Update}
          exact
          path="/request-help-update"
        />
        <Route component={ResultPage} exact path="/result-page" />
        <Route component={Search} exact path="/search" />
        <Route
          component={RequestHelp1aUpdate}
          exact
          path="/request-help1a-update"
        />
        <Route component={LandingPage} exact path="/landing-page" />
        <Route component={LandingPage1A} exact path="/landing-page1a" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
