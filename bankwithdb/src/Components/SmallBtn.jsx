function SmallBtn({ text, action }) {
  return (
    <button className="small-btn" onclick={action}>
      {text}
    </button>
  );
}

export default SmallBtn;
