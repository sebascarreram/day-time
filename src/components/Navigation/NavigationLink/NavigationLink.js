const Link = (props) => (
  <a {...props} onClick={props.onClick} className="nav__link">
    {props.text}
  </a>
);
export default Link;
