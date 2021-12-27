import PaitingList from '../SectionList/PaintList';
import paintings from '../../paintings.json';
import Section from '../Section/Section';
import { Conteiner } from './App.styled';

export default function App() {
  return (
    <Conteiner>
      <Section title="Top day">{<PaitingList items={paintings} />}</Section>
    </Conteiner>
  );
}
