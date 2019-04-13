import React from 'react';
import {connect} from 'react-redux';
import { Image, List, Button } from 'semantic-ui-react';
import styles from './ListItem.module.css';

const SeachItem = ({image, title, videoId, getVideoId, clearStore, addVideo, clearSeachInput, videoList}) => {
    // function getId(id){
    //     let video = videoList.find(el => el.videoId === id);
    //     if(!video){
    //         saveVideoToDB(id, title); 
    //     };
    //     getVideoId(id);
    //     clearStore();
    //     clearSeachInput();
    // };

    return (
    <List.Item style={{display: 'flex', alignItems: 'center'}}>
        <div className={styles.listContent}>
        {image ? <Image src={image.medium}/> :
         <Image width='100' height='140' src='https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png'/>
         }
            <List.Content style={{ marginLeft: '2rem'}}>
                <List.Header style={{fontSize: '1.3rem'}}>{title}</List.Header>
            </List.Content>
        </div>
        <Button  color='red' style={{width: '15%'}} onClick={() =>{console.log('aaa')}}>READ MORE</Button>
    </List.Item>
    );
};

function MSTP (state){
    return {
    //    videoList: state.videoList
    };
};

function MDTP (dispatch) {
    return {
        // getVideoId: function(id){
        //     dispatch(getSingleVideo(id));
        // },
        // clearStore: function(){
        //     dispatch(clearSeach());
        // },
        // clearSeachInput: function(){
        //     dispatch(clearInput());
        // },
        // addVideo: function(obj){
        //     dispatch(addVideoToDB(obj));
        // }
    };
};

export default connect(MSTP, MDTP)(SeachItem);