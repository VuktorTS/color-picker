import ColorPicker from './ColorPicker/ColorPicker';
import css from './App.module.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <div className={css.main}>
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
