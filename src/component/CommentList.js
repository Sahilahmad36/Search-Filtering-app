import React, { Component } from 'react';
import CommentFilter from './CommentFilter';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      filteredComments: [],
    };
  }

  componentDidMount() {
   
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data, filteredComments: data });
      });
  }

  handleSearch = (searchText) => {
    const filteredComments = this.state.comments.filter((comment) =>
      comment.name.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ filteredComments });
  };

  render() {
    return (
      <div>
        <h1 className="comm">Comments</h1>
        <CommentFilter onSearch={this.handleSearch} />
        <ul className="api">
          {this.state.filteredComments.map((comment) => (
            <li key={comment.id} className="list">
              <strong className="style">{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
