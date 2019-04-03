import React from 'react';
// jss
import withStyles from 'react-jss';
import classNames from 'classnames';

const Contact = ({ classes, toggleSidenav }) => (
  <div className={classNames(
    classes.contactContainer,
    'container mb-5'
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
        Contact
      </span>
    </div>
    <h1 className={classNames(
      classes.headerText,
      'mb-4'
    )}>
      Project brief description
    </h1>
    <textarea
      className={classNames(
        classes.descriptionTextarea,
        'w-100 mb-4 p-3'
      )}
      name="description"
      placeholder="Project Type, Target customer, timeline, estimate etc"
    />
    <h1 className={classNames(
      classes.headerText,
      'mb-4'
    )}>
      About You
    </h1>
    <div className="row mb-4">
      <div className="col-12 col-md-6">
        <input
          className={classNames(
            classes.input,
            'w-100 mb-3 p-2'
          )}
          id="fullname"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className="col-12 col-md-6">
        <input
          className={classNames(
            classes.input,
            'w-100 mb-3 p-2'
          )}
          id="email"
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className="col-12 col-md-6">
        <input
          className={classNames(
            classes.input,
            'w-100 mb-3 p-2'
          )}
          id="company"
          type="text"
          placeholder="Company Name"
        />
      </div>
      <div className="col-12 col-md-6">
        <input
          className={classNames(
            classes.input,
            'w-100 mb-3 p-2'
          )}
          id="position"
          type="text"
          placeholder="Position"
        />
      </div>
    </div>
    <button className={classNames(
      classes.contactBtn,
      'btn btn-sm rounded-0'
    )}>
      Request a Quote
    </button>
  </div>
)

export default withStyles({
  contactContainer: {
    transition: 'all 0.5s ease-in-out',
    '-webkit-transition': 'all 0.5s ease-in-out'
  },
  pageTitle: {
    fontWeight: '300',
    fontSize: '33.2px',
    borderBottom: '3px solid #ff4ba8'
  },
  headerText: {
    fontSize: '24.03px',
    fontWeight: '100'
  },
  input: {
    backgroundColor: 'rgba(30, 26, 52, 0.33)',
    borderWidth: '1px',
    borderColor: 'rgba(79, 75, 104, 0.33)',
    color: '#fff',
    borderRadius: 0,
    '&::-webkit-input-placeholder': {
      fontSize: '14.2px',
      opacity: '0.33'
    },
    '&::-moz-placeholder, :-ms-input-placeholder': {
      fontSize: '14.2px'
    }
  },
  descriptionTextarea: {
    height: '244px',
    extend: 'input'
  },
  contactBtn: {
    color: '#fff',
    backgroundColor: '#ff4ba8',
    borderColor: '#ff4ba8'
  }
})(Contact)