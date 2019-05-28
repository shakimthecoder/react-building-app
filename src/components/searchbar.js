import React from 'react';

class SearchBar extends React.Component {
    render()
    {
        return(
            <div className="ui field">
                <form className="search-style">
                    <div className="">
                        <input form="search-bar">
                            <label>Search</label>
                          </input>
                      </div>
                     </form>
                </div>

        );
    }
}

export default SearchBar;