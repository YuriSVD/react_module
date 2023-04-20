import React, {useEffect, useState} from 'react';
import {axiosService} from "../services/axios.service";
import {urls} from "../configs/urls";
import Album from "../album/Album";

const Albums = () => {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        axiosService.get(urls.albums)
            .then(value => value.data)
            .then(value => setAlbums(value))
    }, [])
    return (
        <div>
            <h3>All albums</h3>
            {
                albums.map(value => <Album item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Albums;