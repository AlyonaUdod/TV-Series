import axios from 'axios';

export function getSerialsList(param){
    return (axios.get(`http://api.tvmaze.com/search/shows?q=${param}`));
};

export function getSerialInfo(id){
    return (axios.get(`http://api.tvmaze.com/search/shows/${id}`));
};