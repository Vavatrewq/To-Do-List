import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';
import '../css/form.css';

export default function Form({ handleSubmit, handleChange, newKey }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={newKey} />
      <button type="submit">
        <AiOutlineCheck />
      </button>
    </form>
  );
}

Form.PropTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newKey: PropTypes.string.isRequired,
};
