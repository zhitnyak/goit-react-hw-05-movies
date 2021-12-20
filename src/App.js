import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import Spiner from "./Loader/Loader";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        {/* <Suspense fallback={<Spiner />}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/movies">
              <MovieView />
            </Route>

            <Route path="/movies/:movieId" exact>
              <MovieDetailsView />
            </Route>

            <Redirect to="/" />
          </Switch>
        </Suspense> */}
      </Container>
    </div>
  );
}

export default App;
