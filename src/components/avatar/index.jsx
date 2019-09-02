import React from 'react';
import avatar from '../../images/default.png';
import avatar_click from '../../images/click.png';
import avatar_hover from '../../images/hover.png';
import avatar_sleep from '../../images/sleep.png';
import './avatar.css';

class Avatar extends React.Component {

    state = {
        image: avatar
    }

    setImage(event){
        switch(event){
            case "hover":
                this.setState({image: avatar_hover});
                break;
            case "click":
                this.setState({image: avatar_click});
                break;
            case "sleep":
                this.setState({image: avatar_sleep});
                break;
            default:
                this.setState({image: avatar});
        }
    }

    render(){
        return(<img src={this.state.image} alt="An 8-bit representation of Anna Jacobsen." 
                onMouseEnter={() => {
                    this.setImage("hover");
                }}
                
                onMouseLeave={() => {
                    this.setImage();
                    setTimeout(() => {this.setImage("sleep")}, 30000);
                }}

                onMouseDown={() => {
                    this.setImage("click");
                }}
            />)
    }

}

export default Avatar;