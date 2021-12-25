import { Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container.js";
import Spiner from "./components/Loader/Loader";
import "./App.css";

const HomeView = lazy(() =>
  import("./components/pages/HomeView" /* webpackChunkName: "HomeView"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/
  )
);
const MovieList = lazy(() =>
  import("./components/MovieList/MovieList" /* webpackChunkName: "Movies"*/)
);
const NotFoundPage = lazy(() =>
  import(
    "./components/pages/NotFoundPage" /* webpackChunkName: "NotFoundPage"*/
  )
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
          <Redirect to="/" />
        </Switch>{" "}
      </Suspense>
    </Container>
  );
}
export default App;
