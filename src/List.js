import React from 'react';

const List = ({title,image,writer,licence}) => {
    // buraya apideki baslıklar gelebilir
    return(
        <div>
            <div>
                <img src={image} alt=""></img>
                <ul>
                <h4>{title}Song Name</h4>
                <p>{writer}Writer of the song</p>
                <a href={licence}>Licence</a>
                </ul>
            </div>
        </div>
    );
}

export default List;