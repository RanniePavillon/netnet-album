import { Route, Switch, useLocation } from 'react-router-dom';
import { Index as Home } from '../../components/home/Index';
import { MyAlbum } from '../../components/album/Index'

export const WebRoute = () => {
    const location = useLocation().pathname;

    return (
        <Switch>
            <Route exact path="/netnet-album" render={props=>(Render(Home, props, location))} />
            <Route exact path="/netnet-album/:year/:months" render={props=>(Render(MyAlbum, props, location))} />
           
            {/* 404 NOT FOUND */}
            <Route path="*">
                404 NOT FOUND
            </Route>
        </Switch>
    )
}

const Render = (Component, props, location) => (
    <Component {...props} />
)