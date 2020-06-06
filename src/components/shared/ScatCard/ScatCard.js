import React from 'react';
// import PropTypes from 'prop-types';
import './ScatCard.scss';

class ScatCard extends React.Component {
  // static propTypes = {
  //   scat: PropTypes.shape
  // }
  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard">
        {scat.location}
      </div>
    );
  }
}
export default ScatCard;
