function TaskCard({ task }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(9, 30, 66, 0.25)',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  };

  const titleStyle = {
    margin: '0 0 0.5rem 0',
    color: '#172b4d',
    fontSize: '1rem',
    fontWeight: '600',
  };

  const descriptionStyle = {
    margin: 0,
    color: '#5e6c84',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  };

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>{task.title}</h4>
      <p style={descriptionStyle}>{task.description}</p>
    </div>
  );
}

export default TaskCard;