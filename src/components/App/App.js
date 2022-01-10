import PaitingList from '../SectionList/PaintList';
import paintings from '../../paintings.json';
import Section from '../Section/Section';
import { Conteiner } from './App.styled';
import { Counter } from '../Counter/Counter';
import Dropdown from '../Dropdown/Dropdown';
import ColorPicker from '../Colorpicker';
import Appp from '../TodoList/Appp';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <Conteiner>
      <Section title="Top day">{<PaitingList items={paintings} />}</Section>
      <Counter initValue={111} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      <Appp />
    </Conteiner>
  );
}
