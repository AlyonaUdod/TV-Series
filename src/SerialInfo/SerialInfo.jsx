import React from 'react';
import { connect } from 'react-redux';
import { Button, List, Image, Divider, Header, Icon } from 'semantic-ui-react';
import Info from './Info';
import { addCurrentSerial } from '../redux/actions/currentSerialAction';
import styles from './SerialInfo.module.css';

const SerialInfo = ({cS, TVSL, moveBack, getCurrentSerial}) => {

    function getSerial(id){
        if(cS.show.id !== id){
            window.scrollTo(0, 0);
            let cS = TVSL.find(el => el.show.id === id);
            getCurrentSerial(cS);
        };
    };

    return (
        <div className={styles.card}>    
            <Button color='teal' onClick={moveBack}>Back to Seach</Button> 
            {cS.score && <Info cS={cS}/>}
            <Divider horizontal>
                <Header as='h3'>
                    <Icon name='film'/>
                    TV Serials List
                </Header>
            </Divider>
            <List animated verticalAlign='middle'>
            { TVSL.length > 0 && TVSL.map(el => 
                <List.Item key={el.show.id} style={{cursor:'pointer'}} onClick={() => getSerial(el.show.id)}>
                    <Image src={el.show.image ? el.show.image.medium : 'https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png'} style={{width: '4rem'}} />
                    <List.Content>
                        <List.Header>{el.show.name}</List.Header>
                    </List.Content>
                </List.Item>
            )}
            </List>
            <Divider/>
        </div>
    );
};

function MSTP (state){
    return {
      cS: state.currentSerial,
      TVSL: state.TVSerialsList,
    };
};

function MDTP (dispatch) {
    return {
        getCurrentSerial: function(obj){
            dispatch(addCurrentSerial(obj));
        },
    };
};

export default connect(MSTP, MDTP)(SerialInfo);