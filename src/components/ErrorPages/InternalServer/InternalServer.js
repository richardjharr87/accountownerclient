import React from 'react';
import './InternalServer.css';
import { Link } from 'react-router-dom';

const InternalServer = (props) => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            500 Internal Server Error</h2>
                        <div class="error-details">
                            Unfortunately we're having trouble loading the page you are looking for.
                        </div>
                        <div class="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                Take Me Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InternalServer;