import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ReservePage from "../pages/ReservePage";

const ContentsArea = () => {
    return(
        <>
            <Router>
                <div>
                    <Route exact path="/" component={ReservePage}/>
                    <Route exact path="/confirm" component={ReservePage}/>
                </div>
            </Router>
        </>
    )
};

export default ContentsArea;