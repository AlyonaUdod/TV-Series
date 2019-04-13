import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import styles from './SeachForm.module.css';
import { handlerChange, clearInput } from '../redux/actions/queryTextAction';
import { queryTVSerials } from '../redux/actions/TVSerialsListAction';
import {  clearQueryError } from '../redux/actions/errorAction';

const SeachForm = ({handlerInputChange, clearSeachInput, queryText, seachSerials, queryError, clearError, TVSerialsList, history}) => {

    function handlerChange(e){
        handlerInputChange(e.target.value);
    };

    function clearSeach(){
        clearSeachInput()
        clearError()
    }

    function seachSerialsTVMaze(){
        if(queryText){
           seachSerials(queryText)
        };
    };

    return (
        <Form className={styles.form} onSubmit={seachSerialsTVMaze}>
            <Form.Field>
                <Input  style={{fontSize:'1.2rem'}} placeholder='Enter TV Serials title...'  icon='search' autoFocus value={queryText} onChange={handlerChange}/>
            </Form.Field>
            <Button type='submit' positive>Seach</Button>
            <Button type='reset' negative onClick={clearSeach}>Reset</Button>
            {queryError && 
            <Message color='grey'>
                <Message.Header as='h6'>{queryError}</Message.Header>
            </Message>}
        </Form>
    );
};

function MSTP (state){
    return {
        queryText: state.queryText,
        queryError: state.queryError,
        TVSerialsList: state.TVSerialsList,
    };
};

function MDTP (dispatch) {
    return {
        seachSerials: function(param){
            dispatch(queryTVSerials(param));
        },
        handlerInputChange: function(value){
            dispatch(handlerChange(value));
        },
        clearSeachInput: function(){
            dispatch(clearInput());
        },
        clearError: function(){
            dispatch(clearQueryError());
        }
    };
};

export default withRouter(connect(MSTP, MDTP)(SeachForm));