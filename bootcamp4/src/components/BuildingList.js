import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	selectedUpdate(id) {
		this.props.selectedUpdate(id);
	}
	removeBuilding(id) {
		this.props.removeBuilding(id);
	}
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;

		const buildingList = data
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.filter(e=> {
			return !this.props.content.some(filter => {
				return filter === e.id
			});
		})
		.map(directory => {
			return (
				<tr class = "building"  key={directory.id}>
					<td onClick = { () => this.selectedUpdate(directory.id)}>{directory.code}
					</td>
					<td onClick = { () => this.selectedUpdate(directory.id)}>{directory.name}
					</td>
					<td>
						<button id = "building" type="button" class="close"	onClick = { () => this.removeBuilding(directory.id)}>< RemoveBuilding/></button>
					</td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
