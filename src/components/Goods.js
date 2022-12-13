
function Goods(props) {
  return (
    <div className="goods-block">
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.cost}</p>
      <button className="add-to-card" data-key={props.articul}>
        Add to card
      </button>
    </div>
  )
}
export default Goods;