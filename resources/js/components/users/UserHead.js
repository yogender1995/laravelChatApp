import React, { Component } from 'react';

class UserHead extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="d-flex align-items-center justify-content-between p-3 px-4 border-bottom">
                <div className="app-chat-msg-title">
                    <h4 className="mb-0">{this.props.pageName}</h4>
                    <p className="text-success">
                        Online
                    </p>
                </div>
                <div className="app-chat-msg-btn">
                    <a className="font-20 text-muted btn" href="#">
                        <i className="fa fa-video-camera" />
                    </a>
                    <a aria-expanded="false" aria-haspopup="true" className="font-20 text-muted btn pr-0" data-toggle="dropdown" href="#">
                        <i className="fa fa-gear" />
                    </a>
                    <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                        <h6>Action</h6>
                        <a className="dropdown-item" href="#">
                            <i className="ti ti-pencil pr-2" />Rename
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="ti ti-announcement pr-2" />Mark as Unread
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="ti ti-close pr-2" />Close
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="ti ti-trash pr-2" />Delete
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserHead;