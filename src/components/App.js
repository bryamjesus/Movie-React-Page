import { MoviesGrid } from "./MoviesGrid";
import style from "../css/App.module.css"

export function App(){
    return <div>
        <header>
            <h1 className={style.title}>
                Movies
            </h1>
        </header>
        <main>
            <MoviesGrid />
        </main>
    </div>
}