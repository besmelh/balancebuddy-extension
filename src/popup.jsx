import React from "react";
import {render} from "react-dom";
import { Provider} from 'react-redux';
import DefaultNotification from './Pages/DefaultNotification'
import store from './store';


function Popup() {

    const dashboardUrl = "http://localhost:3000/"
    const userId = '62676953fad2994f34150e0f'
    const apiURL = `http://localhost:5000/api/user/${userId}`

    return(
        <Provider store={store}>
            <div>
                <DefaultNotification/>
            </div>
        </Provider>
    );
}

render(<Popup/>, document.getElementById("react-target"));