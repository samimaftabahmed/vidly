import React, {Component} from 'react';
import './App.css'
import {getMovies} from "./services/fakeMovieService";
import Movies from "./components/Movies";

class App extends Component {

    state = {
        movies: getMovies()
    }

    render() {

        if (this.state.movies.length === 0)
            return this.processEmptyMovies();

        return (
            <main role="main" className="container">

                <div className="row">
                    <div className="col">
                        <Movies/>
                    </div>
                </div>

                {/*<br/>*/}

                {/*{this.processMovieCount()}*/}

                {/*{this.processTableHeader()}*/}

                {/*{this.processMovieData()}*/}
            </main>
        );
    }

    processMovieCount() {
        return (
            <div className="row bold">
                <div className="col-10 offset-1">
                    <br/>
                    There are {this.state.movies.length} movies in your database
                    <br/><br/>
                </div>
            </div>
        );
    }

    processTableHeader() {

        return (
            <div className="row font-weight-bold" style={{fontSize: 30}}>
                <div className="col-3 offset-1">Title</div>
                <div className="col-2">Genre</div>
                <div className="col-2 text-center">Stock</div>
                <div className="col-2 text-center">Rate</div>
                <div className="col-1">&nbsp;</div>
                <br/><br/>
            </div>
        );
    }

    processMovieData() {

        return (
            this.state.movies.map(movie => {
                return (
                    <div className="row" key={movie._id} style={{fontSize: 25}}>
                        <div className="col-3 offset-1">{movie.title}</div>
                        <div className="col-2">{movie.genre.name}</div>
                        <div className="col-2 text-center">{movie.numberInStock}</div>
                        <div className="col-2 text-center">{movie.dailyRentalRate}</div>
                        <div className="col-1  text-right">
                            <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie._id)}>
                                Delete
                            </button>
                        </div>
                        <br/><br/>
                    </div>
                );
            })
        );
    }

    handleDelete = (id) => {

        const newMovies = this.state.movies.filter(m => m._id !== id);
        this.setState({movies: newMovies});
    }

    processEmptyMovies() {
        return (
            <main role="main" className="container">
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <br/><br/>
                        <h3>No movies available in the database</h3>
                    </div>
                </div>
            </main>
        );
    }
}


export default App;
