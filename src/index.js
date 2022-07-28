// React Dependencies
import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';

// 3rd party modules
import Amplify, { Auth } from 'aws-amplify';

// Busquo components
import App from './App';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: "api",
                endpoint: "https://hjgy7dgana.execute-api.us-west-1.amazonaws.com",
                region: "us-west-1",
            },
        ]
    }
});

ReactDOM.render(
    <React.Fragment>
        <Router >
            <App />
        </Router>
    </React.Fragment>,
    document.getElementById("root")
);