import React, { Component } from 'react'
import { Consumer } from '../Context'
import { EVENTS_PANELS_VIEW_MODE, EVENTS_CARDS_VIEW_MODE } from '../../constants/main'
import logo from '../../public/logo.svg'
import './header.scss'

class Header extends Component {
    filterChanged = (dispatch, e) => {
        dispatch({ type: 'FILTER_CHANGED', payload: e.target.value })
    }

    changeMode = (dispatch, mode) => {
        dispatch({ type: 'CHANGE_EVENTS_VIEW_MODE', payload: mode})
    }
    
    render () {
        return (
            <Consumer>
                {value => {
                    const { inputFilter, dispatch } = value
                    return (
                        <nav className="navbar navbar-light">
                            <a className="navbar-brand" href="#">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top mx-2" alt="Meetup logo" />
                                Meetup
                            </a>
                            <div className="mode-switch">
                                <a href="#" onClick={this.changeMode.bind(this, dispatch, EVENTS_CARDS_VIEW_MODE)}>
                                    <img height="35" src="src/images/icons/card.svg"/></a>
                                <a href="#" onClick={this.changeMode.bind(this, dispatch, EVENTS_PANELS_VIEW_MODE)}>
                                    <img width="45" src="src/images/icons/panel.svg"/></a>

                                <div className="filter-container">
                                    <input  type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                            onChange={this.filterChanged.bind(this, dispatch)}
                                            value={inputFilter} />
                                </div>
                            </div>
                        </nav>
                    )
                }}
            </Consumer>
        )
    }
}

export default Header