

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainView from '../pages/MainView';





const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/mainview' element={<MainView/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;