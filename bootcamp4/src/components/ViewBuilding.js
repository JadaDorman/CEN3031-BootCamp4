import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {
		const { data , selectedBuilding } = this.props;
		if((data[selectedBuilding-1]) && (data[selectedBuilding -1].hasOwnProperty('coordinates'))){
			return (
				<div>
					<ul> Name: {data[selectedBuilding-1].name} </ul>
					<ul> Code: {data[selectedBuilding-1].code} </ul>
					<ul> Address: {data[selectedBuilding-1].address} </ul>
					<ul> Latitude: {data[selectedBuilding-1].coordinates.latitude}</ul>
					<ul> Longitude {data[selectedBuilding-1].coordinates.longitude}</ul>
					

				</div>
			);
		}
		else if (data[selectedBuilding-1]) {
			return(
			<div>
			<ul> Name: {data[selectedBuilding-1].name} </ul>
			<ul> Code: {data[selectedBuilding-1].name} </ul>
			<ul> Address: NA </ul>
			<ul> Latitude: NA </ul>
			<ul> Longitude NA </ul>
			</div>
			);
		}
		else{
			return (
				<div className="selectedBuilding">
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
					<p>
					</p>
				</div>
			);
		}
	}
}
export default ViewBuilding;
