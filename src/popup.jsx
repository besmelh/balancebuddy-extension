import React from "react";
import {render} from "react-dom";
import Axios from 'axios'

function Popup() {
    const dashboardUrl = "http://localhost:3000/"
    const userId = '62676953fad2994f34150e0f'
    const apiURL = `http://localhost:5000/api/user/${userId}`

    const getData = () => {
        Axios.get(apiURL).then(
            (response) => {
                console.log(response)
            }
        )
    }

    return(
        <div>
            <h1>Task title2</h1>
            <p>lorem ipsum part2</p>
            <button onClick={getData}>Do Task Now</button>
            <button>Give Me Another Task</button>
            <button>Remind Me Later</button>
            <a href={dashboardUrl} target="_blank"><p>Go to Dashboard</p></a>
        </div>
    );
}

render(<Popup/>, document.getElementById("react-target"));