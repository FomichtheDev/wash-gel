import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter, Redirect} from "react-router-dom";
import Footer from "./Footer/Footer";
import {Route, Switch} from "react-router";
import Contacts from "./Contacts/Contacts";
import HomePage from "./HomePage/HomePage";
import GelPage from "./GelPage/GelPage";
import PowderPage from "./PowderPage/PowderPage";
import GelDetail from "./GelDetail/GelDetail";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                    <main>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/gel' exact component={GelPage}/>
                            <Route path='/gel/:name/:id' exact component={GelDetail}/>
                            <Route path='/gel/sortedBy/:sortType' exact component={GelPage}/>
                            <Route path='/washing-powder' exact component={PowderPage}/>
                            <Route path='/washing-powder/sortedBy/:sortType' exact component={PowderPage}/>
                            <Route path='/contacts' component={Contacts}/>
                            <Redirect to='/' />
                        </Switch>
                    </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
