import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './event.scss'
import walk from '../../images/icons/walk.svg'
import Moment from 'react-moment'

export default class Event extends Component {
    render(){
        const { time, name, group, icon = 'walk' } = this.props.event
        const icons = { walk }

        return (
            <div className="event-container row shadow-sm p-3 m-1 mt-4 bg-white rounded">
                <div className="event-time col-sm-2 d-flex align-items-center">
                    <Moment format="HH:mm a">{time}</Moment>
                </div>
                <div className="event-desc col-sm-8">
                    <span className="event-desc-name">{name}</span>
                    <span className="event-desc-group">{group.name}</span>
                </div>
                <div className="col-sm-2 d-flex justify-content-end">
                    <img src={icons[icon]} alt="walk" />
                </div>
            </div>
        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}