import React, { Component } from 'react';

class CommentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearchChange = (e) => {
    const searchText = e.target.value;
    this.setState({ searchText });
    this.props.onSearch(searchText); 
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="filter"
          placeholder="Search comments"
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default CommentFilter;
