import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div"
        >
          <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
          <h3 className=" text-[24px] font-bold uppercase mb-7">
            {card.title}
          </h3>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
