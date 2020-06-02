import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = 'scat1';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1> Home </h1>
        <button className="btn btn-dark" onClick={this.editEvent}> Edit a thing </button>
        <Link to='/scats/scat2'> View Single Scat </Link>
        <Link to='/new'> Add Scat </Link>
      </div>
    );
  }
}
export default Home;
