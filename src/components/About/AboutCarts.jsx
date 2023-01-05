import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center p-6 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px]"
        >
          <img src={card.img} alt="box_img" className=" w-[75px]" />
          <h3 className=" text-[24px] font-bold uppercase">{card.title}</h3>
          <p className="text-[16px] font-medium text-[#646464]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
