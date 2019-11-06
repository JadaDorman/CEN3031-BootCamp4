import React from 'react'

class AddBuilding extends React.Component {
    addItem(e){
       e.preventDefault();
    }
    render() {
        return (
        <form onSubmit={(e) => (this.addItem(e))}>
        <div>
        <input type = "text" placeholder = "Name" />
        <input type = "text" placeholder = "Code" />
        <input type ="text" placeholder = "Address"/>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        </form>
        )
    }
}

export default AddBuilding