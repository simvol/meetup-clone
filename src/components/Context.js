import React, { Component } from 'react'
import { IS_PRODUCTION, URL, GET_TOKEN_URL } from '../../env-config'


const Context = React.createContext()

export class Provider extends Component {
    state = {
        events: [],
        event: {},
        accessToken: window.localStorage.getItem('access_token'),
        tokenType: window.localStorage.getItem('token_type'),
        tokenExpiresIn: window.localStorage.getItem('token_expires_in')
    }

    getEvents(){
        let getContactsUrl = IS_PRODUCTION
            ? `${URL}/find/upcoming_events?access_token=${this.state.accessToken}`
            : `${URL}/events.json`

        fetch(getContactsUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    events: data.events
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        // TODO move this to token interceptor
        // Check if we have access token stored in cookies
        let needToGetTokenFromUrl = IS_PRODUCTION && (!this.state.accessToken || this.state.accessToken === 'null') && location.href.indexOf('access_token') !== -1
        
        let needToRedirectToGetToken = IS_PRODUCTION && (!this.state.accessToken || this.state.accessToken === 'null')

        if (needToGetTokenFromUrl) {

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

        } else if (needToRedirectToGetToken) {
            location.href = GET_TOKEN_URL
        } else {
            this.getEvents();
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer