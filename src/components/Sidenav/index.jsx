import React from 'react';
import { NavLink } from 'react-router-dom';
// router
import { withRouter } from 'react-router-dom'
// jss
import withStyles from 'react-jss';
// classnames
import classNames from 'classnames';

export const SidenavContext = React.createContext()

export class SidenavProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      activeLink: null
    }
    this.toggleSidenav = this.toggleSidenav.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
  }
  toggleSidenav() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
  handleRouteChange(pathname) {
    this.setState({
      activeLink: pathname
    })
  }
  render() {
    return (
      <SidenavContext.Provider value={{
        show: this.state.show,
        activeLink: this.state.activeLink,
        toggleSidenav: this.toggleSidenav,
        onRouteChange: this.handleRouteChange
      }}>
        {this.props.children}
      </SidenavContext.Provider>
    )
  }
}

class Sidenav extends React.Component {
  componentWillMount() {
    this.unsubscribe = this.props.history.listen((location) => {
      this.props.onRouteChange(location.pathname)
    })
    this.props.onRouteChange(this.props.history.location.pathname)
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }
  render() {
    const { classes, show, activeLink } = this.props
    return (
      <nav
        style={show ? { opacity: 1 } : {}}
        className={classNames(
          classes.sidenavContainer,
          'position-fixed h-100 pt-5 pb-4'
        )}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/RYdr-avatar.png"
          alt="Avatar"
          className={classNames(
            classes.roundedAvatar,
            'img-fluid mb-4'

          )} />
        <div className={classNames(
          'list-group',
          classes.navItems
        )}>
          <NavLink
            to="/about"
            activeClassName={classes._active}
            className={classNames(
              classes.listGroupItem,
              'my-2 rounded-0',
              { 'pl-5 border-0': activeLink !== '/about' }
            )}>
            <strong>About</strong>
          </NavLink>
          <NavLink
            to="/"
            exact
            activeClassName={classes._active}
            className={classNames(
              classes.listGroupItem,
              'my-2 rounded-0',
              { 'pl-5 border-0': activeLink !== '/' }
            )}>
            <strong>Labs</strong>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName={classes._active}
            className={classNames(
              classes.listGroupItem,
              'my-2 rounded-0',
              { 'pl-5 border-0': activeLink !== '/contact' }
            )}>
            <strong>Contact</strong>
          </NavLink>
        </div>
        <ul
          className={classNames(
            classes.stayConnected,
            'list-unstyled d-flex justify-content-between m-0 px-5'
          )}>
          <li className="">
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance" />
            </a>
          </li>
          <li className="">
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dribbble" />
            </a>
          </li>
          <li className="">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li className="">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withStyles({
  sidenavContainer: {
    top: '0',
    left: '0',
    width: '240px',
    overflowY: 'auto',
    overflowX: 'hidden',
    opacity: '0',
    transition: 'all 0.2s ease-in-out',
    '-webkit-transition': 'all 0.2s ease-in-out',
    '-webkit-overflow-scrolling': 'touch'
  },
  roundedAvatar: {
    padding: '0 4.2em 0 3em'
  },
  navItems: {
    minHeight: '560px'
  },
  _active: {
    '&, &:active': {
      border: '0',
      paddingLeft: 'calc(3rem - 9px) !important',
      borderLeft: '9px solid #ff4ba8'
    },
    '& strong': {
      color: '#ff4ba8'
    }
  },
  listGroupItem: {
    color: '#fff',
    fontWeight: '300',
    fontSize: '20.4px',
    padding: '.75rem 1.25rem',
    backgroundColor: 'rgba(10, 17, 42, 0)',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      textDecoration: 'none'
    }
  },
  stayConnected: {
    opacity: '0.16',
    '& a:hover, a:active': {
      color: '#ff4ba8'
    }
  },
  '@media (min-width: 768px)': {
    sidenavContainer: {
      opacity: '1'
    }
  }
})(withRouter(Sidenav))