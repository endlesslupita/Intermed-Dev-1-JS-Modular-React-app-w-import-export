export function Button({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#0077cc',
        color: 'white',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      {label}
    </a>
  );
}
