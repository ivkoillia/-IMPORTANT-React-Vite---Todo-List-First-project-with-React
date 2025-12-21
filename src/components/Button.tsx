function Button ( 
    { type, className, ariaLabel, children, onClick  }
    : 
    { type: 'submit' | 'button' | 'reset' | undefined; className?: string; ariaLabel?: string; children?: React.ReactNode; onClick?: () => void }) {
  return (
    <button type={type} className={`button ${className ? className : ''}`} aria-label={ariaLabel} onClick={onClick}>{children}</button>
  )
}


export default Button