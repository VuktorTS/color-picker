import { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  const [activeOptionIdx2, setActiveOptionIdx2] = useState(4);
  console.log(useState());
  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  //   state = {
  //     activeOptionIdx: 0,
  //   };

  //   setActiveIdx = index => {
  //     this.setState({ activeOptionIdx: index });
  //   };

  //   makeOptionClassName = index => {
  //     return index === this.state.activeOptionIdx
  //       ? styles.activeOption
  //       : styles.option;
  //   };

  // const { activeOptionIdx } = this.state;
  // const { label } = options[activeOptionIdx];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
