import React from 'react';
import avatar from '../../images/avatar.png';
import avatar_click from '../../images/avatar_click.png';
import avatar_hover from '../../images/avatar_hover.png';

class Avatar extends React.Component {

    state = {
        image: avatar
    }


    render(){
        return(<img src={this.state.image} alt="An 8-bit representation of Anna Jacobsen." 
                onMouseEnter={() => {
                    this.setState({image: avatar_hover})
                }}
                
                onMouseLeave={() => {
                    this.setState({image: avatar})
                }}

                onMouseDown={() => {
                    this.setState({image: avatar_click})
                }}
            />)
    }

}

export default Avatar;