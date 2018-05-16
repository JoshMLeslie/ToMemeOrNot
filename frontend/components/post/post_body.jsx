import React from 'react';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';


export default class PostBody extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.postId).then(
      this.props.history.push(`/`)
    );
  }

  isAuthor () {
    return (this.props.currentPost.author_id === this.props.currentUser.id);
  }

  vote(vote) {
    let settings = {
      type: "posts",
      type_id: parseInt(this.props.postId),
      vote
    };
    this.props.createVote(settings);
  }

  render () {
    const sum = this.props.sumVotes;
    return (
      <div id="post-body">
        <div id="post-body-contents">
          <p>{this.props.body}</p>

          <div className={"flexed"}>
            <div>
              <label>{sum}</label>
              <button onClick={() => this.vote(+1)}>
                <FaArrowCircleOUp className={"icons-block"} />
              </button>
              <button onClick={() => this.vote(-1)}>
                <FaArrowCircleODown className={"icons-block"} />
              </button>
            </div>

            <button
              className={this.isAuthor() ? "" : "hidden"}
              onClick={this.handleDelete}>DELETE ME
            </button>
          </div>
        </div>
      </div>
    );
  }
}
