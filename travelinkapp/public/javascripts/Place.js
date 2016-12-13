import React, { Component } from 'react';
import {Col, Row, CardPanel, Icon} from 'react-materialize';

class Place extends Component {
    // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);

		var query = this.props.params;

        // Set initial state
        this.state = {
            // State needed
			title: "Culinary in Slipi",
            places: [],
			query: query
        };

    }

    componentDidMount(){
        // Static data
        const data = [
			{	
				"id": 3,
				"area_id": 1,
				"city_code": "JKT",
				"img" : "src",
				"name": "Resto Kemuning",
				"category_id" : 1,
				"category_name" : "Culinary",
				"subcategory_id": 5,
				"subcategory_name" : "Chinese Food",
				"open_hours" : "10.00 - 21.00",
				"full_address" : "Jalan Slipi"
			},
			{
				"id": 4,
				"area_id": 1,
				"city_code": "JKT",
				"img" : "src",
				"name": "ATM BNI",
				"category_id" : 3,
				"category_name" : "ATM",
				"subcategory_id": 0,
				"subcategory_name" : "",
				"open_hours" : "",
				"full_address" : "Jalan Slipi"
			},
			{
				"id": 5,
				"area_id": 1,
				"city_code": "JKT",
				"img" : "src",
				"name": "Lawson KS Tubun",
				"category_id" : 20,
				"category_name" : "Minimarket",
				"subcategory_id": 8,
				"subcategory_name" : "Convenient Store",
				"open_hours" : "24 Hours",
				"full_address" : "Jalan KS Tubun"
			}
		];

		// Update state
        this.setState({places: data});
    }

    render(){

        // Map through cars and return linked cars
        const placeNode = this.state.places.map((place) => {
            return (
				<CardPanel className="lighten-4 black-text hoverable">
					<div className="row">
						<Col s={3} m={2}>
							{place.img}
						</Col>

						<Col s={9} m={10}>
							{place.name} <br />

							{place.subcategory_name != "" &&
								<span>
									<Icon>label</Icon> {place.subcategory_name} <br />
								</span>
							}

							{place.open_hours != "" &&
								<span>
									<Icon>schedule</Icon> {place.open_hours} <br />
								</span>
							}
							
							<Icon>location_on</Icon> {place.full_address} 
						</Col>
					</div>
          		</CardPanel>
            )
        });
        return (
            <div className="row container section">
                 <h5>{this.state.title}</h5>
				{placeNode}
            </div>
        );
    }
}

export default Place