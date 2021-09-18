import LazyLoad from 'helpers/LazyLoader'
import { AppRoute } from 'enums/route'
import Main from 'pages/main/Main'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

const CatsPage = LazyLoad(() => import('pages/cats/CatsPage').then(module => module.default))
const CatDetails = LazyLoad(() => import('components/cats/CatDetails').then(module => module.default))

const App: React.FC = () => {

  return (
    <Main>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Home} render={props => <CatDetails {...props} />} />
          <Route path={AppRoute.Cats} component={CatsPage} />
        </Switch>
      </BrowserRouter>
    </Main>
  )
}

export default App;
