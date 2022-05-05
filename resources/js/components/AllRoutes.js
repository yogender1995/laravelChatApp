import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Page404 from './Page404';

class AllRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/yogender" element={<Chat pageTitle="Yogender" imgUrl="assets/img/avtar/01.jpg" />} />
                        <Route path="/jhony" element={<Chat pageTitle="Jhony" imgUrl="assets/img/avtar/02.jpg" />} />
                        <Route path="/banu" element={<Chat pageTitle="Banu" imgUrl="assets/img/avtar/03.jpg" />} />
                        <Route path="/kalpna" element={<Chat pageTitle="Kalpna" imgUrl="assets/img/avtar/04.jpg" />} />
                        <Route path="/" element={<Chat pageTitle="Yogender" imgUrl="assets/img/avtar/01.jpg" />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default AllRoutes;