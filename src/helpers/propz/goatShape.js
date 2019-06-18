import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  disposition: PropTypes.string.isRequired,
  imageUrl: PropTypes.number.isRequired,
  favPose: PropTypes.string.isRequired,
  isFainting: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
});


export default { goatShape };
