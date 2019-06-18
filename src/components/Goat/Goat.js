import React from 'react';

import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';
import GoatCorral from '../GoatCorral/GoatCorral';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    return (
    <div class="Goat col-3">
      <div className="card">
      <img src={goat.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{goat.favPose}</p>
        <a href="#" className="btn btn-primary">X</a>
      </div>
    </div>
  </div>
    );
  }
}

export default Goat;
