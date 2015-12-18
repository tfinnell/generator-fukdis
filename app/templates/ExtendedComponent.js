import React, { Component } from 'react';
import withStyles from '../../decorators/withStyles';
<% if (styles) { %>
<%- "import styles from './"+classname+".css';" %>

<% } %>
@withStyles(styles)
class <%= classname %> extends Component {
  render() {
    return (<div></div>)
  }
}
