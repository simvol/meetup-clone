import React, { Component } from 'react'
import { Consumer } from '../Context'
import logo from '../../public/logo.svg'
import './header.scss'

class Header extends Component {
    filterChanged = (dispatch, e) => {
        dispatch({ type: 'FILTER_CHANGED', payload: e.target.value })
    }
    
    render () {
        return (
            <Consumer>
                {value => {
                    const { filter, dispatch } = value
                    return (
                        <nav className="navbar navbar-light">
                            <a className="navbar-brand" href="#">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top mx-2" alt="Meetup logo" />
                                Meetup
                            </a>
                            <div className="form-inline">
                            <input  type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                    onChange={this.filterChanged.bind(this, dispatch)}
                                    value={filter} /></div>
                        </nav>
                    )
                }}
            </Consumer>
        )
    }
}

export default Header