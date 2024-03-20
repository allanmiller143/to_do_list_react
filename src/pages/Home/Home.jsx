
import React from 'react';
import './Home.css';
import TaskList from '../../components/TaskList/TaskList';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import InsertTask from '../../components/InsertTask/InsertTask';
import Provider from '../../context/Provider';
import '../../index.css';
const Home = () => {
  return (
    <Provider>
      <div className="container">
        <h2 className="title">Lista de Tarefas</h2>
        <Search/>
        <Filter/>
        <TaskList/>
        <InsertTask/>
      </div>
    
    </Provider>
  );
};

export default Home;
