function Button({ children, classStyle = "", handler = () => {}, disabled = false}) {
  return <button className={classStyle} onClick={handler} disabled={disabled}>{children}</button>;
}

export default Button;
