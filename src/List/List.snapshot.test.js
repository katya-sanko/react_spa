import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';

const mockMovies = [
    {
        "id": 299534,
        "title": "Untitled Avengers",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2019-04-24",
        "poster_path": "https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg",
        "overview": "The culmination of the Marvel Cinematic Universe.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": null
      },
      {
        "id": 299536,
        "title": "Avengers: Infinity War",
        "tagline": "An entire universe. Once and for all.",
        "vote_average": 0,
        "vote_count": 0,
        "release_date": "2018-04-25",
        "poster_path": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "budget": 500000000,
        "revenue": 0,
        "genres": [
          "Adventure",
          "Science Fiction",
          "Fantasy",
          "Action"
        ],
        "runtime": 156
      }
];

it('renders correctly', () => {
    const tree = renderer
        .create(<List movies={mockMovies}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});