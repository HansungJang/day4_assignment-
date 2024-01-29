import { dummy } from "./movieDummy";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            ></Movie>
          );
        })}
      </div>
    </div>
  );
}

export default App;
