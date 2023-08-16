function SmallBtn({ text, action }) {
  return (
    <button className="small-btn" onClick={action}>
      {text}
    </button>
  );
}

export default SmallBtn;
