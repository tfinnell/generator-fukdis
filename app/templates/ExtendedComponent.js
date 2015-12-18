import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
<% if (styles) { %><%- "import styles from './"+classname+".css';" %><% } %>

@withStyles(styles)
class <%= classname %> extends Component {
  static propTypes {};
  render() {
    return (
      <div></div>
    );
  }
}

export default <%= classname %>;
