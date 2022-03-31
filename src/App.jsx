import { Route, BrowserRouter, Switch } from "react-router-dom";
import { MainLayout } from "./layouts";
import { app, sidenav } from "./data";
import { mainRoutes } from './routes';
import './App.css';

const Layout = ({ children }) => (
  <MainLayout appName={app.name} sidenav={sidenav}>
    {children}
  </MainLayout>
);

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route>
            <Layout>
              <Switch>
                {mainRoutes.map(({ component, path, permission, exact }) => (
                  <Route exact={exact} key={path} path={path} permission={permission}>
                    {component}
                  </Route>
                ))}
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
