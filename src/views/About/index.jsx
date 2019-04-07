import React from 'react';
// jss
import withStyles from 'react-jss';
import classNames from 'classnames';

const About = ({ classes, toggleSidenav }) => (
  <div className={classNames(
    classes.aboutContainer,
    'container px-4 px-lg-5 pb-5'
  )}>
    <button
      className="btn btn-link d-md-none p-0 my-5 text-white"
      onClick={toggleSidenav}
    >
      <i className="fas fa-bars" />
    </button>
    <div className="d-block mb-5 mt-md-5">
      <span className={classNames(
        classes.pageTitle,
        'pb-1'
      )}>
        About
      </span>
    </div>
    <div className="row">
      <div className="col-12 col-lg-6 position-relative">
        <h1 className={classNames(
          classes.name,
          'm-0'
        )}>
          Syarif <span>Dairani</span>
        </h1>
        <h2 className={classNames(
          classes.role,
          'mb-4'
        )}>
          Web Developer
        </h2>
        <p className={classNames(
          classes.description,
          'mb-4'
        )}>
          Experienced and skilled web developer used to build creative and modern web application, keeps up for updates in the web development industry, loves to code on{" "}
          <span className="font-weight-normal">Python</span> and{" "}
          <span className="font-weight-normal">JavaScript</span>.
        </p>
        <div className={classNames(classes.buttons)}>
          <button className={classNames(
            classes.hireButton,
            'btn mr-4 px-4 rounded-0'
          )}>
            Hire me
          </button>
          <button className={classNames(
            classes.knowButton,
            'btn px-4 rounded-0'
          )}>
            Know more
          </button>
        </div>
        <div className={classNames(
          classes.quoteText,
          'w-100'
        )}>
          <img
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/xAWj-q.png"
            alt="Stay hungry. Stay foolish."
          />
          <p className="font-weight-light">Stay Hungry. Stay Foolish</p>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles({
  aboutContainer: {
    transition: 'all 0.5s ease-in-out',
    '-webkit-transition': 'all 0.5s ease-in-out'
  },
  pageTitle: {
    fontWeight: '300',
    fontSize: '33.2px',
    borderBottom: '3px solid #ff4ba8'
  },
  name: {
    fontWeight: '300',
    '& span': {
      fontWeight: '100'
    },
  },
  role: {
    color: '#ff4ba8',
  },
  description: {
    fontWeight: '100',
    opacity: '0.58',
    fontSize: '1em',
    '& span': {
      color: '#5d96ff'
    },
  },
  buttons: {
    minHeight: '150px',
  },
  hireButton: {
    backgroundColor: '#ff4ba8',
    '&, &:hover': {
      color: '#fff'
    }
  },
  knowButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    '&, &:hover': {
      color: '#fff'
    }
  },
  quoteText: {
    position: 'relative',
    bottom: '1.5em',
    '& img': {
      position: 'absolute',
      top: '0',
      width: '62px',
    },
    '& p': {
      fontSize: '1.1em',
      position: 'absolute',
      top: '16px',
      left: '2.4em',
      fontWeight: '300',
      opacity: '0.24',      
    }
  },
  '@media (min-width: 576px)': {
    name: {
      fontSize: '4em'
    },
    role: {
      fontSize: '2em'
    },
    description: {
      fontSize: '1.5em'
    },
    quoteText: {
      '& img': {
        width: '62px'
      },
      '& p': {
        fontSize: '1.5em',
        top: '13px',
        left: '1.7em'
      }
    }
  },
  '@media (min-width: 768px)': {
    name: {
      fontSize: '3em'
    },
    role: {
      fontSize: '1.8em'
    },
    description: {
      fontSize: '1.25em'
    },
    buttons: {
      minHeight: '180px'
    }
  },
  '@media (min-width: 1200px)': {
    name: {
      fontSize: '4em'
    },
    role: {
      fontSize: '2em'
    },
    description: {
      fontSize: '1.5em'
    }
  }
})(About);
