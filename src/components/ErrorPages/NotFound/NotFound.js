import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        // <p className={'notFound'}>
        //     "404 SORRY COULDN'T FIND IT!!!"
        // </p>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occurred, Requested page not found!
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

export default NotFound;