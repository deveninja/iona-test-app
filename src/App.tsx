import LazyLoad from 'helpers/LazyLoader'
import { AppRoute } from 'enums/route'
import Main from 'pages/main/Main'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Notification from 'components/common/notification/Notification'

const CatsPage = LazyLoad(() => import('pages/cats/CatsPage').then(module => module.default))
const HomePage = LazyLoad(() => import('pages/home/Home').then(module => module.default))

const App: React.FC = () => {

  return (
    <Main>
      <Notification />

      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Home} component={HomePage} />
          <Route path={AppRoute.Cats} component={CatsPage} />
        </Switch>
      </BrowserRouter>
    </Main>
  )
}

export default App;
