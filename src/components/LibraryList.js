import React, {Component} from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
    render(){
        const {libraries} = this.props
        console.log(libraries)
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries}
}


export default connect(mapStateToProps)(LibraryList);