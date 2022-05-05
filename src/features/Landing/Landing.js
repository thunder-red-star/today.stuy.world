// Landing page for the application
import React from 'react';
import ButtonLink from '../../components/Button/ButtonLink';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-content">
          <h1>Welcome to the <span className="landing-title">Today App</span></h1>
          <p>
            This is a simple app built with React.js.
            It is a work in progress and is not yet complete.
          </p>
          <p>
            The app is currently in development and is not yet ready for use.
            Please check back soon.
          </p>
          <!-- A link to the app's GitHub repository -->
          <ButtonLink
            className="button button-primary"
            href="https://github.com/thunder-red-star/today.stuy.world"
            text="View on GitHub"
          />
        </div>
      </div>
    );
  }
}