import React, { useState, useEffect } from 'react';
import Input from '../../../UI/Inputs/Input';
import { Form, Well, Button, FormGroup, Col } from 'react-bootstrap';
import { returnAcctConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';
import { useSelector, useDispatch } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

const CreateAccount = (props) => {

    const [accountForm, setAccountForm] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [ownerId, setOwnerId] = useState(props.match.params.ownerId);

    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.errorHandler.errorMessage);
    const showErrorModal = useSelector(state => state.errorHandler.showErrorModal);
    const showSuccessModal = useSelector(state => state.repository.showSuccessModal);

    useEffect(() => {
        setAccountForm(returnAcctConfiguration());
    }, []);

    const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...accountForm });

    const createAccount = (event) => {
        event.preventDefault();

        const accountToCreate = {
            accountType: accountForm.accountType.value,
            dateCreated: accountForm.dateCreated.value,
            ownerId: ownerId
        }

        const url = '/api/accounts';
        dispatch(repositoryActions.postData(url, accountToCreate, { ...props }));
    }

    const handleChangeEvent = (event, id) => {
        const updatedAccountForm = { ...accountForm };
        updatedAccountForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedAccountForm, id);

        const counter = formUtilityActions.countInvalidElements(updatedAccountForm);

        setAccountForm(updatedAccountForm);
        setIsFormValid(counter === 0);
    }

    const redirectToOwnerDetails = () => {
        props.history.push('/ownerDetails/' + ownerId);
    }

    return (
        <Well>
            <Form horizontal onSubmit={createAccount}>
                {
                    formElementsArray.map(element => {
                        return <Input key={element.id} elementType={element.config.element}
                            id={element.id} label={element.config.label}
                            type={element.config.type} value={element.config.value}
                            changed={(event) => handleChangeEvent(event, element.id)}
                            errorMessage={element.config.errorMessage}
                            invalid={!element.config.valid} shouldValidate={element.config.validation}
                            touched={element.config.touched}
                            blur={(event) => handleChangeEvent(event, element.id)} />
                    })
                }
                <br />
                <FormGroup>
                    <Col mdOffset={6} md={1}>
                        <Button type='submit' bsStyle='info' disabled={!isFormValid}>Create</Button>
                    </Col>
                    <Col md={1}>
                        <Button bsStyle='danger' onClick={redirectToOwnerDetails}>Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
            <SuccessModal show={showSuccessModal}
                modalHeaderText={'Success message'}
                modalBodyText={'Action completed successfully'}
                okButtonText={'OK'}
                successClick={() => dispatch(repositoryActions.closeSuccessModal('/ownerDetails/' + ownerId, { ...props }))} />
            <ErrorModal show={showErrorModal}
                modalHeaderText={'Error message'}
                modalBodyText={errorMessage}
                okButtonText={'OK'} closeModal={() => dispatch(errorHandlerActions.closeErrorModal())} />
        </Well>
    )
}

export default CreateAccount;