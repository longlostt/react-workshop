import ColorBoxesItem from './ColorBoxesItem';

export default function ColorBoxes({ colors }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '250px',
      }}
    >
      {Array.from({ length: 25 }).map((_, index) => (
        <ColorBoxesItem key={index} colors={colors} />
      ))}
    </div>
  );
}
