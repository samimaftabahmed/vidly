import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {

    state = {
        movies: getMovies(),
    };

    fontStyle = {
        fontSize: 28
    };

    render() {

        const {length: movieCount} = this.state.movies;

        if (movieCount === 0)
            return <div className="text-center" style={this.fontStyle}><br/><br/>There are no movies in your database
            </div>

        return (
            <React.Fragment>

                <br/><br/>
                <div className="text-center" style={this.fontStyle}>
                    There are {movieCount} movie(s) in your database
                </div>

                <br/><br/><br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderMovieData()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }


    renderMovieData() {

        return (
            this.state.movies.map(movie => {
                return (
                    <tr>
                        <td scope="row">{movie.title}</td>
                        <td scope="row">{movie.genre.name}</td>
                        <td scope="row">{movie.numberInStock}</td>
                        <td scope="row">{movie.dailyRentalRate}</td>
                        <td scope="row">
                            <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })
        );
    }


    handleDelete = (id) => {

        const newMovies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({movies: newMovies});
    }
}

export default Movies;
