import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.id}. {post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
Blog.propTypes = {
  posts: PropTypes.array
}

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    posts.push({id: 3, title: 'Gone with the wind', content: 'Beautiful'});
    
    return (
      <div>
        <Blog posts={posts} />
      </div>
    );
  }
}

export default Test;
