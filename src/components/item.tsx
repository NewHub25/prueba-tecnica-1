export function Item({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) {
  return (
    <li>
      <h3>{text}</h3>
      <span>
        <button onClick={handleClick} title="Borrar item">
          <img src="/trash.svg" alt="delete item" />
        </button>
      </span>
    </li>
  );
}
