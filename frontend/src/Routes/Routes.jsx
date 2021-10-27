import React, { useState, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserContext } from '../Helper/userContext'
import Login from '../Pages/Authentication/LoginPage/Login'
import SignUp from '../Pages/Authentication/SignUpPage/SignUp'
import ThankYou from '../Pages/Authentication/VerificationPage/ThankYou'
import Verification from '../Pages/Authentication/VerificationPage/Verification'
const Routes = () => {
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <Switch>

            <UserContext.Provider value={value}>
                <Route path={"/signUp/ThankYou"} exact component={ThankYou} />
                <Route path={"/login"} exact component={Login} />
                {/* <Route path={"/home"} exact component={Home} />
            <ProtectedRoute path={"/"} exact component={Home} />
            <Route path={"/questions"} exact component={Questions}></Route>
            <Route path={"/question/:id"} exact component={QuestionPage}></Route> */}
                <Route path={"/signUp"} exact component={SignUp} />
                <Route path={"/verification"} exact component={Verification} />
                {/* <Route path={"/professional/:id"} exact component={Professional} />
                <Route path={"/professional/:id/appointment"} exact component={Appointment} />
                <Route path={"/findProfessionals"} exact component={FindProf} />
                <Route path={"/blogs"} exact component={BlogHomePage} />
                <Route path={"/blogs/new"} exact component={CreatePost} />
                <Route path={"/blogs/post/:id"} exact component={BlogPost} /> */}

            </UserContext.Provider>
        </Switch>
    )
}

export default Routes
