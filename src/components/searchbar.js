import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };

onInputChange = event => { 
    this.setState({
        term: event.target.value
    });

onFormSubmit = event => {
    event.preventDefault();

    };
};
    render()
    {
        return(
            <div className="ui field">
                <form onSubmit={this.onFormSubmit}className="search-style">
                    <div className="search-section">
                    <label>Search</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        />
                      </div>
                     </form>
                </div>

        );
    }
}

export default SearchBar;