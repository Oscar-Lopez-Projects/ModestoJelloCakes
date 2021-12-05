// import { Fragment, useEffect } from "react";
// import { withRouter } from "react-router-dom";

// const ScrollToTop = ({history, children}) => {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return <Fragment>{children}</Fragment>;
// };

// export default withRouter(ScrollToTop);
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//     const routePath = useLocation();
//     const onTop = () => {
//       window.scrollTo(0, 0);
//     }
//     useEffect(() => {
//       onTop()
//     }, [routePath]);
    
//     return null;
// };

// export default ScrollToTop;
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} />)} />;
  }
}

export default withRouter(ScrollToTop);