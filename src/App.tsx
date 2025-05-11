import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import Background from './components/BackgroundIllustration/BackgroundIllustration';

function App() {
  return (
    <ThemeProvider>
      <Background />
      <Navbar />
      <EmployeeTable />
    </ThemeProvider>
  );
}

export default App;
