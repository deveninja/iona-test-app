import LazyLoad from 'helpers/LazyLoader'
import { AppRoute } from 'enums/route'
import Main from 'pages/main/Main'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Notification from 'components/common/notification/Notification'
import { Button } from 'react-bootstrap'

const CatsPage = LazyLoad(() => import('pages/cats/CatsPage').then(module => module.default))
const HomePage = LazyLoad(() => import('pages/home/HomePage').then(module => module.default))

const App: React.FC = () => {

  return (
    <Main>
      <Notification />

      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Home} component={HomePage} />
          <Route path={AppRoute.Cats} component={CatsPage} />
          <Route path={AppRoute.Dogs} render={({ history }) => (
            <div>
              <div
                style={{
                  margin: '20%',
                }}
              >
                <h1>Under Construction</h1>
                <Button
                  variant="warning"
                  onClick={() => history.push('/')}
                >
                  Back to home page
                </Button>
              </div>
            </div>
          )} />
        </Switch>
      </BrowserRouter>
    </Main>
  )
}

export default App;
