import React, { Component } from 'react'
import Events from './events/Events'
import Header from './header/Header'
import { Provider } from './Context'
import '../styles/main.scss'
import { URL, API_KEY } from '../../env-config'

class App extends Component {

    componentDidMount() {
        fetch(`${URL}/find/upcoming_events?key=${API_KEY}`, {
                mode: 'no-cors'
            })
            .then(res => console.log(res))
    }

    render() {
        return (
            <Provider>
                <div className='container-fuild'>
                    <Header />
                    <Events />
                </div>
            </Provider>
        )
    }
}

export default App