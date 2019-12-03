import React from "react";
import AddTodo from "./containers/AddTodo";
import VisibleToDoList from "./containers/VisibleToDoList";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <AddTodo />
    <VisibleToDoList />
    <Footer />
  </div>
);

export default App;
