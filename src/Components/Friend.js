import Button from "./Button";

export default function Friend({
  id,
  name,
  image,
  balance,
  onIsSplit,
  isSplit,
  hideAddFrnd,
}) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance !== 0 ? (
        <p className={balance < 0 ? "red" : "green"}>
          {balance < 0
            ? `You owe ${name} ${-balance}$`
            : `${name} owes you ${balance}$`}
        </p>
      ) : (
        <p>{name} and you are even</p>
      )}
      <div
        onClick={() => {
          hideAddFrnd();
          onIsSplit(id);
        }}
        style={{ textAlign: "center" }}
      >
        <Button>{isSplit === id ? "Close" : "Select"}</Button>
      </div>
    </li>
  );
}
