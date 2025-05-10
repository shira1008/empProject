import { useEffect, useState, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Employee } from '../../types/types';
import './Table.css';

const EmployeeTable = () => {
  const { theme, toggleTheme } = useTheme();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const EMPLOYEES_PER_PAGE = 5;
  const employeesPerPage: number = EMPLOYEES_PER_PAGE;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/data/employees.json');
        if (!response.ok) {
          throw new Error('Error - response is not ok');
        }
        const data: Employee[] = await response.json();
        setEmployees(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError('Error fetching the data: ' + error.message);
        } else {
          setError('Unknown error');
        }
        console.error('Error fetching your data: ', error);
      }
    };

    fetchEmployees();
  }, []);

  // pangination
  // **index of employee
  const indexLast = currentPage * employeesPerPage;
  const indexFirst = indexLast - employeesPerPage;
  const currentEmployees = employees.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // for memoization to prevent unnecessary recalculations during re-renders
  const paginationButtons = useMemo(() => {
    if (totalPages <= 1) return null;

    return [...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => goToPage(index + 1)}
        className={currentPage === index + 1 ? 'active' : ''}
      >
        {index + 1}
      </button>
    ));
  }, [totalPages, currentPage]);

  return (
    <div className='table-container'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='table-wrapper'>
        <table className='employee-table responsive-table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <img
                    className='emp-img'
                    src={employee.photo}
                    alt={employee.name}
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.id}</td>
                <td>
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        {/* previous arrow */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className='material-icons'>chevron_left</span>
        </button>

        {/* Page Numbers */}
        {paginationButtons}

        {/* next arrow */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className='material-icons'>chevron_right</span>
        </button>

        {/* Button to toggle theme */}
        <button className='theme-toggle-2' onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '🌞'}
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
