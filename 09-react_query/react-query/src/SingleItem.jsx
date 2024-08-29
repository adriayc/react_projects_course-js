const SingleItem = ({ item }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => console.log('Edit task')}
      />

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => console.log('Delete task')}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
