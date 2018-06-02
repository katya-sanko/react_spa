import React, { Component } from 'react';
import './errorPage.css';

const ErrorPage = () => (
    <div className="errorPage">
        <div className='errorPage-content'>
            <span className='errorPage-content404'>4 0 4</span>
            <div className='errorPage-contentText'>THE PAGE WAS NOT FOUND</div>
            <a className='btn errorPage-contentLink' href='/movies'>back to movies</a>
        </div>
    </div>
);

export default ErrorPage;