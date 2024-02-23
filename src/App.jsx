import "./App.css"; 
import Calendar from "./_components/Calendar";
const App = () => {

  return (
    <div className="App">
      <h1>Time Tabled</h1>
      <h2>This is your current schedule</h2>
      <Calendar /> 
    </div>
  );
};

export default App; 