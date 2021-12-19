import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
// import Vidget from './components/Vidget';
// import TodoList from './components/TodoList/TodoList';
// import initialTodos from './components/TodoList/todos.json';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const res = Math.round((good / this.countTotalFeedback()) * 100);
    if (!res) {
      return 0;
    }
    return res;
  };

  handleButtonClick = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
            />
          )}
        </Section>
      </div>
    );
  }
}
// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };
//   render() {
//     const { todos } = this.state;
//     const completedTodo = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0,
//     );
//     return (
//       <>
//         <div>
//           <span>ОБЩЕЕ Кол-во: {todos.length}</span>
//           <span>Выполнeнных: {completedTodo}</span>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

export default App;
