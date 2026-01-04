import './Toggle.css';

export default function Toggle({
  label,
  options,
  value,
  onChange,
  className = '',

  style = {},
}) {
  return (
    <div className="toggle-root" style={style}>
      {label && <span className="toggle-label">{label}</span>}

      <div className={`toggle-container ${className}`}>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`toggle-btn ${value === opt.value ? 'active' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
            {opt.icon && opt.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
