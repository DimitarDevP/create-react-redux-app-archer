import React, {Component} from "raect"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import {connect} from "react-redux"


class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={ComponentName} /> */} 
                    {/* <Route path="/OtherRoute" component={OtherComponentName} /> */} 
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        // prop: state.propName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // prop: () => dispatch(actionName())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)