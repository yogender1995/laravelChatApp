import React, { Component, PropTypes } from 'react';

class UserImg extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="bg-img">
                <img className="img-fluid" src={this.props.imgUrl} alt="user" />
            </div>
        );
    }
}

export default UserImg;