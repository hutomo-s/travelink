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
			url: this.props.placeUrl,
            places: [],
			query: query
        };
    }

    componentDidMount(){
		this.loadPlaces();
    }

	loadPlaces() {
				
		$.ajax({
			url: this.state.url,
			method: "GET",
			data: this.state.query,
			dataType: 'json',
			cache: false,
			success: function(data) {
				if(data.data){
					this.setState({places: data.data});
				}
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.state.url, status, err.toString());
			}.bind(this)
		});
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