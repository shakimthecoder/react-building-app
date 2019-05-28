import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };


    render()
    {
        return(
            <div className="ui field">
                <form className="search-style">
                    <div className="search-section">
                    <label>Search</label>
                        <input type="text" value={this.state.term} />
                            

                      </div>
                     </form>
                </div>

        );
    }
}

export default SearchBar;