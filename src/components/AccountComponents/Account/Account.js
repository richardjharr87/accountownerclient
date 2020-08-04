import React from 'react';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

const redirectToUpdateAccount = (id, history) => {
    history.push('/updateAccount/' + id);
}

const redirectToDeleteAccount = (id, history) => {
    history.push('/deleteAccount/' + id);
}

const Account = (props) => {
    return (
        <tr>
            <td>{props.account.accountType}</td>
            <td><Moment format="MM/DD/YYYY">{props.account.dateCreated}</Moment></td>
            <td>
                <Button bsStyle="success" onClick={() => redirectToUpdateAccount(props.account.id, props.history)}>Update</Button>
            </td>
            <td>
                <Button bsStyle="danger" onClick={() => redirectToDeleteAccount(props.account.id, props.history)}>Delete</Button>
            </td>
        </tr>
    )
}

export default Account;