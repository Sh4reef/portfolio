import React from 'react';
// jss
import withStyles from 'react-jss';
import classNames from 'classnames';

const Works = ({ classes, toggleSidenav }) => (
  <div className={classNames(
    classes.workContainer,
    'container px-4 px-lg-5'
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
        Labs
        </span>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcset="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/t9Tq-lab-1.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/BVUl-lab-1.png"
            alt="Card cap"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">colorsup</h4>
          <p className="mb-2 text-truncate">
            Grasp8 is in pre production phase. More details coming soon
            </p>
          <a href="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/BVUl-lab-1.png">Check now</a>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcset="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/UfVR-lab-2.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/Wg2w-lab-2.png"
            alt="Card cap"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">Project Grasp8</h4>
          <p className="mb-2 text-truncate">
            Curated color palate inspiration on your fingure tip
            </p>
          <a href="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/Wg2w-lab-2.png">More screens</a>
        </div>
      </div>
    </div>
  </div>
)

export default withStyles({
  workContainer: {
    transition: 'all 0.5s ease-in-out',
    '-webkit-transition': 'all 0.5s ease-in-out'
  },
  pageTitle: {
    fontWeight: '300',
    fontSize: '33.2px',
    borderBottom: '3px solid #ff4ba8'
  },
  cardBodyBackground: {
    backgroundColor: '#1e1a34',
    '& h4': {
      fontWeight: '300',
      fontSize: '18.4px'
    },
    '& p': {
      opacity: '0.18',
      fontWeight: '300',
      fontSize: '13.2px'
    },
    '& a': {
      color: '#ff4ba8',
      fontWeight: '300',
      fontSize: '10.2px'
    }
  },
  '@media (min-width: 768px)': {
    cardBodyBackground: {
      '& h4': {
        fontWeight: '300',
        fontSize: '18.4px'
      }
    }
  }
})(Works)