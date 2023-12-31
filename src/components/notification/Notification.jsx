import PropTypes from 'prop-types';
import "./Notification.scss"

console.log('Notification.js loaded!');

const Notification = ({ message }) => {
  return <p className='message'>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;