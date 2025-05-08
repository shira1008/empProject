import EmployeeTable from './components/EmployeeTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='bg-shape'>
        <div id='triangle-topright'></div>
        <div id='triangle-bottomleft'></div>
        <Navbar />
        <EmployeeTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
