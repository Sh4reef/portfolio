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
            srcSet="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/NFBd-memory-game.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/lSmJ-memory-game.png"
            alt="memory game"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">Memeory Game</h4>
          <p className="mb-2 text-truncate">
            Grasp8 is in pre production phase. More details coming soon
            </p>
          <a href="https://sh4reef.github.io/fend-memory-game/" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcSet="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/eZ_D-neighborhood-map.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/N5Hu-neighborhood-map.png"
            alt="neighborhood map"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">Neighborhood Map</h4>
          <p className="mb-2 text-truncate">
            Curated color palate inspiration on your fingure tip
            </p>
          <a href="https://github.com/Sh4reef/fend-neighborhood-map-react" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcSet="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/5AtY-my-read.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/OBv4-my-read.png"
            alt="my read"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">My Read</h4>
          <p className="mb-2 text-truncate">
            Curated color palate inspiration on your fingure tip
            </p>
          <a href="https://github.com/Sh4reef/fend-myread-react" target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcSet="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/vJsb-frogger-game.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/3P5B-frogger-game.png"
            alt="arcade game"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">Arcade Game</h4>
          <p className="mb-2 text-truncate">
            Curated color palate inspiration on your fingure tip
            </p>
          <a href="https://sh4reef.github.io/fend-frogger-arcade-game/" target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-5">
        <picture>
          <source
            srcSet="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/PXQO-sarahah.webp"
            type="image/webp"
          />
          <img
            className="img-fluid w-100"
            src="https://uploads.codesandbox.io/uploads/user/ace28234-a8f6-4bad-ac46-ad90b1fe37b9/Q2zJ-sarahah.png"
            alt="sarahah"
          />
        </picture>
        <div className={classNames(
          classes.cardBodyBackground,
          'p-4 pb-3'
        )}>
          <h4 className="m-0 mb-2">Sarahah</h4>
          <p className="mb-2 text-truncate">
            Curated color palate inspiration on your fingure tip
            </p>
          <a href="https://sh4reef.github.io/sarahah/" target="_blank" rel="noopener noreferrer">Preview</a>
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