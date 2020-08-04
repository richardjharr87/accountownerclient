import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Account from '../../AccountComponents/Account/Account';

const OwnersAccounts = (props) => {
    let accounts = [];
    if (props.accounts) {
        accounts = props.accounts.map(account => {
            return (
                <Account
                    key={account.id}
                    account={account}
                    {...props}
                />
            );
        })
    }
    const url = '/createAccount/' + props.ownerId;
    return (
        <>
            <Row>
                <Col mdOffset={10} md={2}>
                    <Link to={url} >Create Account</Link>
                </Col>
            </Row>
            <br />

            <Row>
                <Col md={12}>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                <th>Account type</th>
                                <th>Date created</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default OwnersAccounts;