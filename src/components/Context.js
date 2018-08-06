import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
       events: [
           {
                "created": 1532281212000,
                "duration": 14400000,
                "id": "253036150",
                "name": "Mt Seymour 1st Peak.. Pump.",
                "rsvp_limit": 25,
                "status": "upcoming",
                "time": 1534006800000,
                "local_date": "2018-08-11",
                "local_time": "10:00",
                "updated": 1532290453000,
                "utc_offset": -25200000,
                "waitlist_count": 0,
                "yes_rsvp_count": 49,
                "group": {
                    "created": 1144853928000,
                    "name": "The VanHikers",
                    "id": 233284,
                    "join_mode": "open",
                    "lat": 49.279998779296875,
                    "lon": -123.12000274658203,
                    "urlname": "VanHiking",
                    "who": "VanHikers",
                    "localized_location": "Vancouver, BC",
                    "region": "en_US",
                    "timezone": "Canada/Pacific"
                },
                "link": "https://www.meetup.com/VanHiking/events/253036150/",
                "description": "<p>Annual trip to 1st pump (peak) of mt Seymour.</p> <p>Please meet by the notice board at the top of the parking lot at 10am.</p> <p>Hike will take 4 hrs max and distance is approx 8km return with an elevation gain of 400m.</p> <p>Please wear hiking boots, bring food and water. Also bug spray can come in handy on this hike.</p> <p>After the hike we may like to go to northlands golf course patio for some relaxation. If offers great views too.</p> <p>Car pool suggestion real Canadian superstore gas station area at 9<br/>15am. Suggested car pool fee $8 return.</p> ",
                "visibility": "public_limited"
            },
            {
                "created": 1532281212000,
                "duration": 14400000,
                "id": "253036151",
                "name": "Downtown Volleyball",
                "rsvp_limit": 18,
                "status": "upcoming",
                "time": 1534006800000,
                "local_date": "2018-08-11",
                "local_time": "10:00",
                "updated": 1532290453000,
                "utc_offset": -25200000,
                "waitlist_count": 0,
                "yes_rsvp_count": 49,
                "group": {
                    "created": 1144853928000,
                    "name": "Extremly Shy or Looking for Friends",
                    "id": 233284,
                    "join_mode": "open",
                    "lat": 49.279998779296875,
                    "lon": -123.12000274658203,
                    "urlname": "ExtremlyShyOrLookingforFriends",
                    "who": "Shiers",
                    "localized_location": "Vancouver, BC",
                    "region": "en_US",
                    "timezone": "Canada/Pacific"
                },
                "link": "https://www.meetup.com/VanHiking/events/253036150/",
                "description": "<p>Play volleyball and have fun</p> ",
                "visibility": "public_limited"
            }
       ] 
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer