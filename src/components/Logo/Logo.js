const Logo = (props) => (
  <div className="logo">
    <h1 className="logo__text">
      {props.firstname} {props.lastname}
    </h1>
  </div>
);

export default Logo;
