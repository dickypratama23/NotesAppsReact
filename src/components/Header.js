import React from 'react';

function Header({onSearch}) {
    return (
        <div className={'header'}>
            <div className={'title'}>
                <i className="fa fa-newspaper-o"></i>
                Notes
            </div>
            <div className={'search'}>
                <div className={'icon-input'}>
                    <i className="fa fa-search"></i>
                    <input type="text" onChange={(e) => onSearch(e.target.value)} placeholder={'Cari Catatan ...'}/>
                </div>
            </div>
        </div>
    )
}

export default Header;