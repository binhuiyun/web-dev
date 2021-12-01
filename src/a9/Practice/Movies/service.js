const URL = 'http://localhost:4000/rest/movies';

const findAllMovies = () =>
    fetch(URL)
        .then(response => response.json());


const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

const deleteMovie = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
const createMovie = (movie) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
const findMovieById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json());


export default {
    findAllMovies, deleteMovie,createMovie,findMovieById,updateMovie
};
