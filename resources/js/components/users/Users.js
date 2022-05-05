import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserImg from './UserImg';

class Users extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-chat-sidebar-user scrollbar scroll_dark">

                <div className="app-chat-sidebar-user-item">
                    <Link to="/yogender">
                        <div className="d-flex active">
                            <UserImg imgUrl="assets/img/avtar/01.jpg" />
                            <div>
                                <h5 className="mb-0">Yogender</h5>
                                <p className="text-white"><span><i className="zmdi zmdi-check mr-2" /></span>I like you</p>
                                <div className="d-xl-none">
                                    <small>Just now</small>
                                    <span className="badge badge-success">5</span>
                                </div>
                            </div>
                            <div className="ml-auto text-right d-none d-xl-block">
                                <small>Just now</small>
                                <span className="badge badge-success">5</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="app-chat-sidebar-user-item">
                    <Link to="/jhony">
                        <div className="d-flex">
                            <UserImg imgUrl="assets/img/avtar/02.jpg" />
                            <div>
                                <h5 className="mb-0">Jhony</h5>
                                <p><span><i className="zmdi zmdi-check mr-2" /></span>How are you</p>
                                <small className="d-xl-none">yesterday</small>
                            </div>
                            <div className="ml-auto text-right d-none d-xl-block">
                                <small>yesterday</small>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="app-chat-sidebar-user-item">
                    <Link to="/banu">
                        <div className="d-flex">
                            <UserImg imgUrl="assets/img/avtar/03.jpg" />
                            <div>
                                <h5 className="mb-0">Banu</h5>
                                <p><span><i className="zmdi zmdi-check mr-2" /></span>Hi...</p>
                                <small className="d-xl-none">20 Aug</small>
                            </div>
                            <div className="ml-auto text-right d-none d-xl-block">
                                <small>20 Aug</small>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="app-chat-sidebar-user-item">
                    <Link to="/kalpna">
                        <div className="d-flex">
                            <UserImg imgUrl="assets/img/avtar/04.jpg" />
                            <div>
                                <h5 className="mb-0">Kalpna </h5>
                                <p><span><i className="zmdi zmdi-check-all mr-2" /></span>Thanks</p>
                                <div className="d-xl-none">
                                    <small>30 Aug</small>
                                    <span className="badge badge-success">35</span>
                                </div>
                            </div>
                            <div className="ml-auto text-right d-none d-xl-block">
                                <small>30 Aug</small>
                                <span className="badge badge-success">35</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Users;
