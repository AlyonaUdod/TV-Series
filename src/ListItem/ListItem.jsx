import React from 'react';
import {connect} from 'react-redux';
import { Image, List, Button } from 'semantic-ui-react';
import styles from './ListItem.module.css';
import {addCurrentSerial} from '../redux/actions/currentSerialAction';

const SeachItem = ({image, title, id, TVSerialsList, getCurrentSerial}) => {

    function getSerial(id){
        let cS = TVSerialsList.find(el => el.show.id === id)
        getCurrentSerial(cS)
    }

    return (
    <List.Item style={{display: 'flex', alignItems: 'center'}} onClick={() => getSerial(id)}>  
        <div className={styles.listContent}>
        {image ? <Image src={image.medium}/> :
         <Image width='100' height='140' src='https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png'/>
         }
            <List.Content style={{ marginLeft: '2rem'}}>
                <List.Header style={{fontSize: '1.3rem'}}>{title}</List.Header>
            </List.Content>
        </div>
        <Button  color='red' style={{width: '15%'}}>READ MORE</Button>
    </List.Item>
    );
};

function MSTP (state){
    return {
      TVSerialsList: state.TVSerialsList,
    };
};

function MDTP (dispatch) {
    return {
        getCurrentSerial: function(obj){
            dispatch(addCurrentSerial(obj));
        },
    };
};

export default connect(MSTP, MDTP)(SeachItem);