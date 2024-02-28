export default function Button({ children, onClick }) {
  return (
    <div className="button" style={{ textAlign: "center" }} onClick={onClick}>
      {children}
    </div>
  );
}
