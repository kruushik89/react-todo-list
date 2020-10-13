import React from "react";
import './SearchPenal.scss';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const SearchPenal = () => {
    return (
        <div className='SearchPanel'>
            <input type="text" placeholder='search'/>
            <ItemStatusFilter/>
        </div>
    )
}

export default SearchPenal;
