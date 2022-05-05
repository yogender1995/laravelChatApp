import React, { Component } from 'react';

class UserChat extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="scrollbar scroll_dark app-chat-msg-chat p-4">
                <div className="chat">
                    <div className="chat-img">
                        <a data-placement="left" data-toggle="tooltip" href="#">
                            <div className="bg-img">
                                <img className="img-fluid" src={this.props.userImg} alt="user" />
                            </div>
                        </a>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-content">
                            <p>Hey John, I am looking for the best admin template.</p>
                            <p>Could you please help me to find it out?</p>
                        </div>
                        <div className="chat-msg-content ">
                            <p>It should be Bootstrap 4 compatible.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4">
                    <h6>30 May</h6>
                </div>
                <div className="chat chat-left justify-content-end">
                    <div className="chat-msg">
                        <div className="chat-msg-content">
                            <p>Hey John, I am looking for the best admin template.</p>
                            <p>Could you please help me to find it out?</p>
                        </div>
                        <div className="chat-msg-content ">
                            <p>It should be Bootstrap 4 compatible.</p>
                        </div>
                    </div>
                </div>
                <div className="chat">
                    <div className="chat-img">
                        <a data-placement="left" data-toggle="tooltip" href="#">
                            <div className="bg-img">
                                <img className="img-fluid" src={this.props.userImg} alt="user" />
                            </div>
                        </a>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-content ">
                            <p>It should be Bootstrap 4 compatible.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserChat;