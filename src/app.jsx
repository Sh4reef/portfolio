import React, { Fragment } from 'react';
// router
import { Switch, withRouter } from 'react-router-dom';
// css
import 'assets/css/portfolio.css';
// jss
import withStyles from 'react-jss';
import classNames from 'classnames';
// components
import Sidenav, { SidenavContext } from 'components/Sidenav';

class Portfolio extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classNames(
        classes.mainContainer,
        'container-fluid p-0 h-100'
      )}>
        <div className={classNames(
          classes.firstGlassContainer,
          'd-flex h-100'
        )}>
          <SidenavContext.Consumer>
            {({ show, activeLink, onRouteChange }) => (
              <Fragment>
                <Sidenav show={show} activeLink={activeLink} onRouteChange={onRouteChange} />
                <section
                  style={show ? { marginLeft: "240px" } : {}}
                  className={classNames(
                    classes.contentContainer,
                    'position-relative w-100'
                  )}>
                  <Switch>
                    {/* Routes */}
                  </Switch>
                </section>
              </Fragment>
            )}
          </SidenavContext.Consumer>
        </div>
      </div >
    )
  }
}

export default withStyles({
  mainContainer: {
    backgroundImage: 'url(https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/wdJW-blurred_bg.png)',
    backgroundSize: 'cover',
    overflow: 'hidden'
  },
  firstGlassContainer: {
    backgroundColor: 'rgba(10, 17, 42, 0.6)'
  },
  contentContainer: {
    minWidth: '320px',
    marginLeft: '0',
    overflowX: 'hidden',
    backgroundColor: 'rgba(10, 17, 42, 0.7)',
    transition: 'all 0.2s ease-in-out',
    '-webkit-transition': 'all 0.2s ease-in-out',
    '-webkit-overflow-scrolling': 'touch'
  },
  '@media (min-width: 768px)': {
    contentContainer: {
      marginLeft: '240px'
    }
  }
})(withRouter(Portfolio))