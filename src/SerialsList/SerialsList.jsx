import React from 'react';
import { List, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ListItem from '../ListItem/ListItem';
import styles from './SerialsList.module.css';

const SerialsList = ({TVSerialsList}) => {
    return (
        <div className={styles.wrapper}>
            <List selection className={styles.list}>
                <Header style={{color: 'black', textAlign: 'center', fontSize:'2.2rem', textDecoration: 'underline'}}>
                    TV Serilas List
                </Header>
                {TVSerialsList.length > 0 && TVSerialsList.map(el => <ListItem key={el.show.id} title={el.show.name} image={el.show.image}/> )}
            </List>
        </div>
        
    );
};

function MSTP (state){
    return {
        TVSerialsList: state.TVSerialsList,
    };
};

export default connect(MSTP,null)(SerialsList);