import React, {useState, useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import Splash from "./Splash";
import Home from "./root/Home";
import Login from "./Login";

const Application = (props) => {
    const [view, setView] = useState(<Splash/>);
    useEffect(() => {
        setTimeout(() => {
            if (true) {
                setView(<Home/>);
            } else {
                setView(<Login/>);
            }
        }, 2000);

    }, []);
    return (
        view
    );
}

export default Application;