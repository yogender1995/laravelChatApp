import React, { Component } from 'react';

class SearchUsers extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="app-chat-sidebar-search px-4 pb-4 pt-4 border-bottom">
                <div className="input-group">
                    <input aria-describedby="basic-addon1" className="form-control border-right-0" placeholder="Search..." type="text" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="ti ti-search magnifier" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default SearchUsers;