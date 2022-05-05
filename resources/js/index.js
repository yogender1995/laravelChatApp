import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';


if (document.getElementById('laravelChatApp')) {
    ReactDOM.render(
        <AllRoutes />
        ,
        document.getElementById('laravelChatApp')
    );
}