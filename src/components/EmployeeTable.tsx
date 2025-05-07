import { useEffect, useState } from 'react';
import type { Employee } from '../types/types';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/data/employees.json');
        if (!response.ok) {
          throw new Error('Error noo');
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

  return (
    <div className='table-container'>
      <h1>Employee Table</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table className='employee-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>
                <img
                  src={employee.photo}
                  alt={employee.name}
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              </td>
              <td>
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
