import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import welcome from "./Pages/welcome";
import register from "./Pages/register";
import login from "./Pages/login";
import home from "./Pages/home";
import settings from "./Pages/settings";
import updateinfo from "./Pages/updateinfo";
import deleteaccount from "./Pages/deleteaccount";
function App() {
  return (
	  <Router>
		  <div>
			  <Switch>
				  <Route exact path="/" component={welcome} />
				  <Route exact path="/register" component={register} />
				  <Route exact path="/login" component={login} />
				  <Route exact path="/home" component={home} />
				  <Route exact path="/settings" component={settings} />
				  <Route exact path="/updateinfo" component={updateinfo} />
				  <Route exact path="/deleteaccount" component={deleteaccount} />
			  </Switch>
		  </div>
	  </Router>
  );
}

export default App;
