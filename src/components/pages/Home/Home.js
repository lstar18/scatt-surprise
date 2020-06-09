import React from 'react';
import ScatCard from '../../shared/ScatCard/ScatCard';
import './Home.scss';
import authData from '../../../helpers/data/authData';
import scatData from '../../../helpers/data/scatData';

class Home extends React.Component {
  state = {
    scats: [],

  }

  getScats = () => {
    const uid = authData.getUid();
    scatData.getScatsByUid(uid)
      .then((scats) => this.setState({ scats }))
      .catch((err) => console.error('cannot get scats', err));
  }

  componentDidMount() {
    this.getScats();
  }

  removeScat = (scatId) => {
    scatData.removeScat(scatId)
      .then(() => this.getScats())
      .catch((err) => console.error('cannot delete scat', err));
  }

  render() {
    const { scats } = this.state;

    const buildScatCards = scats.map((scat) => (
      <ScatCard key={scat.id} scat={scat} removeScat={this.removeScat}/>
    ));
    return (
      <div className="Home">
        <h1> Home </h1>
        <div className="d-flex flex-wrap">
          { buildScatCards}
        </div>
      </div>
    );
  }
}
export default Home;
