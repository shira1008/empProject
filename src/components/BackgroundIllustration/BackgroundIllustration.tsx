import { useTheme } from '../../contexts/ThemeContext';

const Background = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='bg-shape'>
      <div id='triangle-topright'></div>
      <div id='triangle-bottomleft'>
        {' '}
        <button className='theme-toggle-3' onClick={toggleTheme}>
          {' '}
          {theme === 'light' ? '🌙' : '🌞'}
        </button>
      </div>
    </div>
  );
};

export default Background;
