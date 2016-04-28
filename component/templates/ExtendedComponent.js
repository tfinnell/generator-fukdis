import React, { Component, PropTypes } from 'react';
<% if (!nostyles) { -%>
import s from './<%= classname %>.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
<% } -%>

class <%= classname %> extends Component {
  static propTypes = {};
  render() {
    return (
      <div></div>
    );
  }
}

<% if (!nostyles) { -%>
export default withStyles(s)(<%= classname %>);
<% } else { -%>
export default <%= classname %>;
<% } -%>

