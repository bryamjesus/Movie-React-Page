import style from "../css/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={style.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          {/* La ruta de para la pagina principal tiene que estar al ultimo si no, no va a funcionar */}
        </Switch>
      </main>
    </Router>
  );
}
