import { Title } from './Section.styled';
export default function Section({ title, children }) {
  return (
    <div>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
}
