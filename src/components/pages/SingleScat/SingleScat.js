import React from 'react';

import './SingleScat.scss';
import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('cannot eget single scat', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <h1> {scat.location}</h1>
        <p> Color: {scat.color}</p>
        <p> Shape: {scat.shape}</p>
        <p> Size:  {scat.size}</p>
        <p> Temperature: {scat.tempature}</p>
        <p> Viscosity: {scat.viscosity}</p>
        <p> Notes: {scat.notes}</p>
        <p> Was it Fulfilling: {scat.wasFulfilling ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}
export default SingleScat;
