export default function Card() {
  return (
    <div className="flex-col max-w-[124px]">
      <div>
        <img loading="lazy" src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="p-1 flex-col">
        <h5>Apple 13” Macbook Pro</h5>
        <span>$2600.99</span>
        <span>raiting</span>
      </div>
    </div>
  );
}
