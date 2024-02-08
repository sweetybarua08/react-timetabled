import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itenary for 7 Days in Chicago ✍</h1>
      <h2>Welcome to Chicago, Sweety! Check out this calendar to get to know the city and see all the sights during your stay.</h2>
      <Calendar />
    </div>
  )
}

export default App