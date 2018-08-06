import React, { Component } from 'react'
import Events from './events/Events'
import Header from './header/Header'
import { Provider } from './Context'
import '../styles/main.scss'

class App extends Component {
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