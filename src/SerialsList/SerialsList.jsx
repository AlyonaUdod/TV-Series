import React from 'react';
import { List, Header, Button, Divider, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ListItem from '../ListItem/ListItem';
import styles from './SerialsList.module.css';

const SerialsList = ({moveBack, TVSerialsList}) => {
    return (
        <div className={styles.wrapper}>
            <Button color='teal' onClick={moveBack}>Back</Button>
            <List selection className={styles.list}>
            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='film'/>
                    TV Serials List
                </Header>
            </Divider>
                {TVSerialsList.length > 0 && TVSerialsList.map(el => <ListItem key={el.show.id} title={el.show.name} image={el.show.image} id={el.show.id}/> )}
            </List>
            <Divider/>
        </div>   
    );
};

function MSTP (state){
    return {
        TVSerialsList: state.TVSerialsList,
    };
};

export default connect(MSTP,null)(SerialsList);