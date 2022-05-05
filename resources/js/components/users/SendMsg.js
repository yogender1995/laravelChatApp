import React, { Component } from 'react';

class SendMsg extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="app-chat-type">
                <div className="input-group mb-0 ">
                    <div className="input-group-prepend d-none d-sm-flex">
                        <span className="input-group-text">
                            <i className="fa fa-smile-o">
                            </i>
                        </span>
                    </div>
                    <input className="form-control" placeholder="Type here..." type="text" />
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-paper-plane" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default SendMsg;