import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${z1CBxXFmW8LDAhfLc6UyaVjtoJN7G8fY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    state = { 
        reviews: []
    }
    
    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                //data.something
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
