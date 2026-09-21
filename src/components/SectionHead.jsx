import Reveal from './Reveal.jsx';

export default function SectionHead({ title, lead, align = 'center' }) {
  return (
    <Reveal className={`section-head${align === 'left' ? ' section-head--left' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
