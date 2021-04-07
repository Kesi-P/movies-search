import React, { Component } from 'react'

export default class MovieRow extends Component {
     render() {
        const movie_poster_past = 'https://image.tmdb.org/t/p/w185'+ this.props.movie_item.poster_path
   
        return (
            <table key={this.props.movie_item.id}>
                <tbody>
                <tr>
                    <td>
                        <img alt={this.props.movie_item.title} width='120' src= {movie_poster_past}/> 
                    </td>
                    <td>
                    {this.props.movie_item.title}
                    <p>
                    {this.props.movie_item.overview}
                    </p>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
