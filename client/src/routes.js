import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import {AuthPage} from "./pages/AuthPage";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {CoursesPage} from "./pages/CoursesPage";

export const useRoutes = (isAuthenticated) =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/auth" exact>
                    <AuthPage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path ="/" exact>
                <MainPage/>
            </Route>
            <Route path ="/about" exact>
                <AboutPage/>
            </Route>
            <Route path ="/courses" exact>
                <CoursesPage/>
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )

}