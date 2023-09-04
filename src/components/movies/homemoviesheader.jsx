import ButtonToggle from '../home/buttonToggle';
import { useState } from 'react';

const OPTIONS = [
  { name: 'Últimas', id: 'ultimas' },
  { name: 'Tendencias', id: 'tendencias' },
  { name: 'Estrenos', id: 'estrenos' },
];

export const HeaderMoviesOptions = () => {
  const [selectedSection, setSelectedSection] = useState('Últimas');

  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Películas online</h1>

        <div className="flex [&>button]:p-4 [&>button]:border-b-2 [&>button]:uppercase">
          {OPTIONS.map((option) => (
            <ButtonToggle isSelected={selectedSection === option.name} onClick={() => setSelectedSection(option.name)} key={option.id}>
              {option.name}
            </ButtonToggle>
          ))}
        </div>
      </header>
    </>
  );
};
