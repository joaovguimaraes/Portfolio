import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SvgAnimation from './pages/SvgAnimation';

export default function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/svg-animation" component={SvgAnimation}/>
            </Switch>
        </BrowserRouter>
    )
}