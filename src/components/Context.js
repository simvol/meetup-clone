import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
       events: [
           {
                "created": 1532281212000,
                "duration": 14400000,
                "id": "253036150",
                "name": "Hike with Dogs",
                "icon": "pet",
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
            },
            {
                "created": 1532281212000,
                "duration": 14400000,
                "id": "253036152",
                "name": "Coffee & Chat",
                "icon": 'cafe',
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
                    "name": "Invisible Coffee Drinkers",
                    "id": 233284,
                    "join_mode": "open",
                    "lat": 49.279998779296875,
                    "lon": -123.12000274658203,
                    "urlname": "Coffee Lovers",
                    "who": "Coffeirs",
                    "localized_location": "Vancouver, BC",
                    "region": "en_US",
                    "timezone": "Canada/Pacific"
                },
                "link": "https://www.meetup.com/VanHiking/events/253036150/",
                "description": "<p>Play volleyball and have fun</p> ",
                "visibility": "public_limited"
            }
       ],
       event: {
            "created": 1533321883000,
            "duration": 15300000,
            "id": "253036151",
            "name": "Downtown Volleyball",
            "rsvp_limit": 20,
            "status": "past",
            "time": 1533572100000,
            "local_date": "2018-08-06",
            "local_time": "09:15",
            "updated": 1533589961000,
            "utc_offset": -25200000,
            "waitlist_count": 0,
            "yes_rsvp_count": 20,
            "venue": {
                "id": 1322064,
                "name": "Kits Beach",
                "lat": 49.27442932128906,
                "lon": -123.15251922607422,
                "repinned": false,
                "address_1": "1305 Arbutus Street Vancouver",
                "city": "Vancouver",
                "country": "ca",
                "localized_country_name": "Canada",
                "phone": "778 859 2371",
                "zip": "V6J 5N2",
                "state": "BC"
            },
            "group": {
                "created": 1523423871000,
                "name": "Extremly Shy or Looking for Friends",
                "id": 28119700,
                "join_mode": "open",
                "lat": 49.279998779296875,
                "lon": -123.04000091552734,
                "urlname": "VANCOUVER-FUNSEEKERS-BEACH-VOLLEYBALL-MEETUP",
                "who": "Members",
                "localized_location": "Vancouver, BC",
                "region": "en_US",
                "timezone": "Canada/Pacific"
            },
            "link": "https://www.meetup.com/VANCOUVER-FUNSEEKERS-BEACH-VOLLEYBALL-MEETUP/events/253460307/",
            "description": "<p>Kits beach should be free since it's a STAT monday holiday!</p> ",
            "how_to_find_us": "Look for the orange flag or ask for Paul/Zoen",
            "visibility": "public"
        }
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