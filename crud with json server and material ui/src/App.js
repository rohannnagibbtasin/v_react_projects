import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Edit from './Components/Student/Edit';
import View from './Components/Student/View';
import NotFound from './NotFound';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/view/:id" component={View} />
                    <Route exact path="/edit/:id" component={Edit} />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
