import React, { Component, PropTypes } from 'react';
<% if (nostyles === false) { -%>
<%- "import withStyles from '../../decorators/withStyles';" %>
<%- "import styles from './"+classname+".css';" %>
<% } -%>

<% if (nostyles === false) { -%>
<%= '@withStyles(styles)' %>
<% } -%>
class <%= classname %> extends Component {
  static propTypes = {};
  render() {
    return (
      <div></div>
    );
  }
}

export default <%= classname %>;