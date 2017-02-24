import React, { Component } from 'react';
import './Redirect.css';

const RedirectComponent = () => (
    <div>
        <h2>Redirecting, please wait</h2>
        <div className="loading">
            <span>&bull;</span><span>&bull;</span><span>&bull;</span>
        </div>
    </div>
 );

export default RedirectComponent;