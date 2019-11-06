import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      content: [],
      codeVal: '',
      nameVal:''
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding(codeInput, nameInput) {
    this.setState({
      codeVal: codeInput,
      nameVal: nameInput
    })
  }

  removeBuilding(id) {
    const temp = this.state.content
    temp.push(id)
    this.setState({
        content: temp
    })
    delete this.props.data['']
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 class = "heading"> UF Directory App</h1>
        </div>
        <Search filterText= {this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    removeBuilding = {this.removeBuilding.bind(this)}
                    content = {this.state.content}
                  />
                </table>
              </div>
              <h2>Add a Building</h2>
            </div>
            <div className="column2">
              <ViewBuilding 
              data={this.props.data}
              selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <div>
            
            <AddBuilding codeInput ={this.state.codeInput} nameInput={this.state.nameInput} addBuilding={this.addBuilding.bind(this)}></AddBuilding>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
