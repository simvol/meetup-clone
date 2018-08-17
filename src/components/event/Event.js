import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './event.scss'
import Moment from 'react-moment'
import { Consumer } from '../Context'
import { EVENTS_PANELS_VIEW_MODE, EVENTS_CARDS_VIEW_MODE } from '../../constants/main'

export default class Event extends Component {
    render(){
        const { time, name, group } = this.props.event

        return (
            <Consumer>
                {value => {
                    const panelsViewMode = value.eventsMode === EVENTS_PANELS_VIEW_MODE
                    let containerClasses = 'event-container shadow-sm p-3 m-1 mt-4 bg-white rounded ' + (panelsViewMode ? 'row' : '')
                    let eventTimeClasses = 'event-time ' + (panelsViewMode ? 'col-sm-2 d-flex align-items-center' : '')
                    let eventDescClasses = 'event-desc ' + (panelsViewMode ? 'col-sm-8' : '')

                    return (
                        <div className={containerClasses}>
                            <div className={eventTimeClasses}>
                                <Moment format="HH:mm a">{time}</Moment>
                            </div>
                            <div className={eventDescClasses}>
                                <span className="event-desc-name">{name}</span>
                                <span className="event-desc-group">{group.name}</span>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}