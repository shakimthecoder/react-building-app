import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };


    render()
    {
        return(
            <div className="ui field">
                <form className="search-style">
                    <div className="search-section">
                        <input form="search-bar" />
                            <label>Search</label>

                      </div>
                     </form>
                </div>

        );
    }
}

export default SearchBar;