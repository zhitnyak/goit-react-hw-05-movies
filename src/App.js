import { Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container.js";
import Spiner from "./components/Loader/Loader";
import "./App.css";
// import HomeView from "./components/pages/HomeView";

const HomeView = lazy(() =>
  import("./components/pages/HomeView" /* webpackChunkName: "HomeView"*/)
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
            {/* <MoviesView /> */}
          </Route>
          <Route path="/movies/:movieId">{/* <MovieDetailsView /> */}</Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
export default App;
