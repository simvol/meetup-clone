import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Events from './events/Events'
import EventDetails from './eventDetails/EventDetails'
import Header from './header/Header'
import { Provider } from './Context'
import '../styles/main.scss'

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header />
                        <div className='container-fluid'>
                            <Switch>
                                <Route exact path="/" component={Events} />
                                <Route exact path="/meetup-clone/event" component={EventDetails} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App