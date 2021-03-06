import React, { Component } from 'react'
import Event from '../event/Event'
import { Consumer } from '../Context'
import './events.scss'

export default class Events extends Component {
    render() {
        let classes = 'm-2'
        return (
            <Consumer>
                {value => {
                    const events = value.filteredEvents
                    classes += value.eventsMode ? ' view-' + value.eventsMode : ''

                    return (
                        <div className={classes}>
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