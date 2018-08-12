import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Events from './events/Events'
import EventDetails from './eventDetails/EventDetails'
import Header from './header/Header'
import { Provider } from './Context'
import '../styles/main.scss'
import { URL, CONSUMER_API_KEY, REDIRECT_URL } from '../../env-config'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            accessToken: window.localStorage.getItem('access_token'),
            tokenType: window.localStorage.getItem('token_type'),
            tokenExpiresIn: window.localStorage.getItem('token_expires_in')
        }
    }

    doRequest = function(){
        fetch(`${URL}/find/upcoming_events?access_token=${this.state.accessToken}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        debugger

        //TODO move this to token interceptor
        //Check if we have access token stored in cookies
        if ((!this.state.accessToken || this.state.accessToken === 'null') && location.href.indexOf('access_token') !== -1) {

            let query = location.href.slice(location.href.indexOf('#') + 1).split('&')

            this.setState({
                accessToken: query[0].slice(query[0].indexOf('=') + 1),
                tokenType: query[0].slice(query[0].indexOf('=') + 1),
                tokenExpiresIn: query[0].slice(query[0].indexOf('=') + 1)
            }, () => {
                window.localStorage.setItem('access_token', this.state.accessToken)
                window.localStorage.setItem('token_type', this.state.tokenType)
                window.localStorage.setItem('token_expires_in', this.state.tokenExpiresIn)
            })

        } else if (!this.state.accessToken || this.state.accessToken === 'null') {
            location.href = `https://secure.meetup.com/oauth2/authorize?client_id=${CONSUMER_API_KEY}&response_type=token&redirect_uri=${REDIRECT_URL}`
        } else {
            this.doRequest();
        }

    }

    render() {
        return (
            <Provider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
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