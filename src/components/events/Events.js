import React, { Component } from 'react'
import Event from '../event/Event'
import { Consumer } from '../Context'

export default class Events extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { events } = value
                    return (
                        <div className="m-2">
                            {events && events.map(event => (
                                <Event key={event.id} event={event} />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}