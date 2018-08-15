import React, { Component } from 'react'
import { Consumer } from '../Context'

export default class EventDetails extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { event } = value
                    return (
                        <div>
                            <h3>Event Details</h3>
                            <h4>{event.name}</h4>
                            <div>{JSON.stringify(event)}</div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}