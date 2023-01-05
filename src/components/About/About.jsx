import AboutCarts from "./AboutCarts";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section">
        <div className="container">
          <div className="flex gap-6">
            <AboutCarts />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
