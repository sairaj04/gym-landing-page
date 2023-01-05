import ProgressionImg from "../../images/who-we-are/progresion.png";
import WorkoutImg from "../../images/who-we-are/workout.png";
import NutritionImg from "../../images/who-we-are/nutritions.png";

function AboutCarts() {
  const cardList = {
    first: {
      img: { ProgressionImg },
      title: "Progression",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    second: {
      img: { WorkoutImg },
      title: "Workout",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
    third: {
      img: { NutritionImg },
      title: "Nutrition",
      description:
        "The point using fear lorem ipsum that aspimotive remal areat yearly oint rem ipsum ihaspe",
    },
  };
  return (
    <>
      <div className="flex flex-col">
        <img src={cardList.img} alt="box_img" />
      </div>
    </>
  );
}

export default AboutCarts;
