import { Component } from 'react';
import SearchUsers from './users/SearchUsers';
import SendMsg from './users/SendMsg';
import UserChat from './users/UserChat';
import UserHead from './users/UserHead';
import Users from './users/Users';


class Chat extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid">
                {/*mail-read-contant-start*/}
                <div className="row">
                    <div className="col-12">
                        <div className="card card-statistics">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-xl-4 col-xxl-3">
                                        <div className="app-chat-sidebar border-right border-md-n h-100">
                                            <SearchUsers />
                                            <Users />
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-xxl-9 border-md-t">
                                        <div className="app-chat-msg">
                                            <UserHead pageName={this.props.pageTitle}/>
                                            <UserChat userImg={this.props.imgUrl}/>
                                        </div>
                                        <SendMsg />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*mail-read-contant-end*/}
            </div>
        );
    }
}

export default Chat;


