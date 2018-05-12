import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comments_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';



const mapStateToProps = (state, ownProps) => {
  const commentInfo = state.entities.comments[ownProps.id];
  return ({
    commentInfo,
    author: state.entities.users[commentInfo.author_id]
  });
};

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  removeComment: id => dispatch(deleteComment(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentItem));
