import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Button, Form, Input, Message, Divider, Header, Icon } from 'semantic-ui-react';
import styles from './SeachForm.module.css';
import { handlerChange, clearInput } from '../redux/actions/queryTextAction';
import { queryTVSerials } from '../redux/actions/TVSerialsListAction';
import {  clearQueryError } from '../redux/actions/errorAction';

const SeachForm = ({handlerInputChange, clearSeachInput, queryText, seachSerials, queryError, clearError}) => {

    function handlerChange(e){
        handlerInputChange(e.target.value);
    };

    function clearSeach(){
        clearSeachInput();
        clearError();
    };

    function seachSerialsTVMaze(e){
        if(queryText){
            e.preventDefault();
            seachSerials(queryText);
        };
    };

    function handleKeyDown(e){
        if(e.keyCode === 13){
            seachSerialsTVMaze(e);
        };
    };

    return (
        <Form className={styles.form} onSubmit={seachSerialsTVMaze}>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='film'/>
                    Seach
                </Header>
            </Divider>
            <Form.Field>
                <Input style={{fontSize:'1.2rem'}} placeholder='Enter TV Serials title...'  icon='search' autoFocus value={queryText} onChange={handlerChange}  onKeyDown = {handleKeyDown}/>
            </Form.Field>
            <Button type='submit' positive>Seach</Button>
            <Button type='reset' negative onClick={clearSeach}>Reset</Button>
            {queryError && 
            <Message color='grey'>
                <Message.Header as='h6'>{queryError}</Message.Header>
            </Message>}
            <Divider/>
        </Form>
    );
};

function MSTP (state){
    return {
        queryText: state.queryText,
        queryError: state.queryError,
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