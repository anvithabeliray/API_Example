
import React, { Component } from 'react'
import {connect} from 'react-redux'
//import {getUsers} from '../actions/usersActions'
import {getUsers} from '../actions/usersActions'
 
 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)

        
        return (
            <div>
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h3>{u.name}</h3>             {/*{u.title} for todo*/}
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)