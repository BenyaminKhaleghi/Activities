import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header, List} from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:5000/api/activities").then(response => {
        console.log(response);
      setActivities(response.data);
  });
  }, []);

  return (
    <div className="App">
      <Header as='h2' icon='users' content='Reactivities'/>
      <header className="App-header">
        <List>
          {activities.map((activity:any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </header>
    </div>
  );
}

export default App;
