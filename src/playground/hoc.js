import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private ifon, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ?
        <WrappedComponent {...props} /> :
        <h2>Please login to see this section!</h2>
      }
    </div>
  );
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));