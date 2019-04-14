import axios from 'axios';

export function getSerialsList(param){
    return (axios.get(`https://api.tvmaze.com/search/shows?q=${param}`));
};