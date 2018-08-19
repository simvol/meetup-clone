import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './event.scss'
import Moment from 'react-moment'
import { getWithoutTags, getShorterThan } from '../../helpers'
import { Consumer } from '../Context'
import { EVENTS_PANELS_VIEW_MODE, EVENTS_CARDS_VIEW_MODE } from '../../constants/main'

const DESC_LENGTH = 200
const FULL = 100
const NEARLY_FULL = 90
const HALF_FULL = 70
const GETTING_FULL = 35

export default class Event extends Component {

    getRibbonColor(limit, rsvped) {
        let fullPercentage = (rsvped / limit) * 100

        if (fullPercentage >= FULL) {
            return 'event-full'
        } else if (fullPercentage >= NEARLY_FULL) {
            return 'event-nearly-full'
        } else if (fullPercentage >= HALF_FULL) {
            return 'event-half-full'
        } else if (fullPercentage >= GETTING_FULL) {
            return 'event-getting-full'
        } else  {
            return 'event-fresh'
        }
    }

    render(){
        const { time, name, group, description, rsvp_limit, yes_rsvp_count } = this.props.event
        const desc = getShorterThan(getWithoutTags(description), DESC_LENGTH)

        return (
            <Consumer>
                {value => {
                    const panelsViewMode = value.eventsMode === EVENTS_PANELS_VIEW_MODE
                    let containerClasses = 'event-container shadow-sm p-3 m-1 mt-4 bg-white rounded ' + (panelsViewMode ? 'row' : '')
                    let eventTimeClasses = 'event-time ' + (panelsViewMode ? 'col-sm-2 d-flex align-items-center' : '')
                    let eventInfoClasses = 'event-info ' + (panelsViewMode ? 'col-sm-4' : '')
                    let eventDescClasses = 'event-desc ' + (panelsViewMode ? 'col-sm-6' : '')
                    let ribbonClasses = 'ribbon ' + this.getRibbonColor(rsvp_limit, yes_rsvp_count)

                    return (
                        <div className={containerClasses}>
                            <div className={ribbonClasses}></div>
                            <div className={eventTimeClasses}>
                                <Moment format="HH:mm a">{time}</Moment>
                            </div>
                            <div className={eventInfoClasses}>
                                <span className="event-info-name">{name}</span>
                                <div className="event-info-separator"></div>
                                <span className="event-info-group">{group.name}</span>
                            </div>
                            <div className={eventDescClasses}>
                                <p>{desc}</p>
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