import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import '../css/list.css';

export default function List({ listTarefas, listEdit, listClear }) {
  return (
    <ul className="listTarefas">
      {listTarefas.map((list, index) => (
        <li key={list}>
          {list}
          <div className="btn-items">
            <AiFillEdit onClick={(e) => { listEdit(e, index); }} className="btn btn-put" />
            <AiFillDelete onClick={(e) => { listClear(e, index); }} className="btn btn-delete" />
          </div>
        </li>
      ))}
    </ul>
  );
}

List.PropTypes = {
  listTarefas: PropTypes.array.isRequired,
  listEdit: PropTypes.func.isRequired,
  listClear: PropTypes.func.isRequired,
};
