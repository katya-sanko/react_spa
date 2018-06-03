import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => (
    <div className="errorPage">
        <div className='errorPage-content'>
            <span className='errorPage-content404'>4 0 4</span>
            <div className='errorPage-contentText'>THE PAGE WAS NOT FOUND</div>
            <Link className='btn errorPage-contentLink' to="/movies">back to movies list</Link>
        </div>
    </div>
);

export default ErrorPage;