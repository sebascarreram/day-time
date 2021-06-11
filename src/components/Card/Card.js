const Card = (props) => (
  <div style={{ backgroundImage: `url(${props.url})` }} className="card">
    {props.children}
  </div>
);
export default Card;
