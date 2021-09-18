import CatDetails from 'components/cats/CatDetails';
import CatList from 'components/cats/CatList';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';

const CatsPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const { match } = props

    return (
        <Switch>
            <Route exact path={match.path} component={CatList} />
            <Route exact path={`${match.path}/:breed`} component={CatList} />
            <Route exact path={`${match.path}/:breed/:id`} component={CatDetails} />
            <Redirect to={match.path} />
        </Switch>
    )
}

export default CatsPage