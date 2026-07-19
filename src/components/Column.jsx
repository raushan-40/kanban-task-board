function Column({ title }) {
  // Simple inline styles to structure columns visually
  const columnStyle = {
    flex: 1,
    backgroundColor: '#ebecf0',
    borderRadius: '8px',
    padding: '1rem',
    minWidth: '280px',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
  };

  const placeholderStyle = {
    flexGrow: 1,
    marginTop: '1rem',
    border: '2px dashed #b0b0b0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7a869a',
    fontSize: '0.9rem',
  };

  return (
    <section style={columnStyle}>
      <h3 style={{ color: '#172b4d', margin: 0 }}>{title}</h3>
      <div style={placeholderStyle}>
        No tasks yet
      </div>
    </section>
  );
}

export default Column;