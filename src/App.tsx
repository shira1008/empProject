import EmployeeTable from './components/EmployeeTable';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-shape'>
      <div id='triangle-topright'></div>
      <div id='triangle-bottomleft'></div>
      <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
