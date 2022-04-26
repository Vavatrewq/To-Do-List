import React, { Component } from 'react';
import Form from './Form/index';
import List from './List/list';
import './css/Main.css';

export default class Main extends Component {
  state = {
    newKey: '',
    listTarefas: [],
    index: -1,
  };

  componentDidMount() {
    const saveList = JSON.parse(localStorage.getItem('saveList'));

    if (!saveList) return;

    this.setState({
      listTarefas: [...saveList],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { listTarefas } = this.state;

    // Se o valor é novo ele salva, caso não sejá retorna;
    if (listTarefas === prevState.listTarefas) return;

    localStorage.setItem('saveList', JSON.stringify(listTarefas));
  }

  handleChange = (e) => {
    this.setState({
      newKey: e.target.value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { listTarefas, index } = this.state;
    let { newKey } = this.state;

    newKey = newKey.trim();

    if (listTarefas.indexOf(newKey) !== -1) return;
    if (newKey.length <= 0) return;

    const newTableitem = [...listTarefas];
    if (index === -1) {
      this.setState({
        listTarefas: [...newTableitem, newKey],
        newKey: '',
      });
    } else {
      newTableitem[index] = newKey;

      this.setState({
        listTarefas: [...newTableitem],
        index: -1,
        newKey: '',
      });
    }
  };

  listEdit = (e, index) => {
    const { listTarefas } = this.state;

    this.setState({
      index,
      newKey: listTarefas[index],
    });
  };

  listClear = (e, index) => {
    const { listTarefas } = this.state;
    const clearItem = [...listTarefas];
    clearItem.splice(index, 1);

    this.setState({
      listTarefas: [...clearItem],
    });
  };

  render() {
    const { newKey, listTarefas } = this.state;

    return (
      <main className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newKey={newKey}
        />

        <List
          listTarefas={listTarefas}
          listEdit={this.listEdit}
          listClear={this.listClear}
        />
      </main>
    );
  }
}
