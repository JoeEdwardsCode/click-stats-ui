// React Dependencies
import React from "react"
import ReactDOM from 'react-dom';

// 3rd party modules
import Amplify from 'aws-amplify';

// Busquo components
import App from './App';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: "api",
                endpoint: "https://hjgy7dgana.execute-api.us-west-1.amazonaws.com/",
                region: "us-west-1",
            },
        ]
    }
});

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById("root")
);