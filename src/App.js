import TodoClassWidget from './components/TodoClassWidget';
import TodoWidget from './components/TodoWidget';

function App() {
  return (
    <div className='container'>
      <TodoWidget />

      <hr />

      <TodoClassWidget />
    </div>
  );
}

export default App;
