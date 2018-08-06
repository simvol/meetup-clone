import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Events from './events/Events'
import EventDetails from './eventDetails/EventDetails'
import Header from './header/Header'
import { Provider } from './Context'
import '../styles/main.scss'
import { URL, API_KEY } from '../../env-config'

class App extends Component {

    componentDidMount() {
        // location.href = `https://secure.meetup.com/oauth2/authorize?client_id=${API_KEY}
        // &response_type=token
        // &redirect_uri=https://www.meetup.com/`

        // fetch(`${URL}/find/upcoming_events?key=${API_KEY}`, {
        //         headers: {
        //             "Content-Type": "application/json; charset=utf-8",
        //             // "Content-Type": "application/x-www-form-urlencoded",
        //         },
        //     })
        //     .then(res => console.log(res))
    }

    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <div className='container-fluid'>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Events} />
                            <Route exact path="/event" component={EventDetails} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App