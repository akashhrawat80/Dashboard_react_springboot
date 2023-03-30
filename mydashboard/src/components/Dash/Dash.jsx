import React from 'react';
import Cards from '../Cards/Cards';
import DenseTable from '../Table/DenseTable';
import './Dash.css'
const Dash=()=>{
    return (
        <div className="Dash">
            <div className="SearchBar">SearchBar</div>
            <Cards/>
            <DenseTable/>
        </div>
    )
}
export default Dash;