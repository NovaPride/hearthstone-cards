import CardWrapper from "../../components/cards-wrapper/cards-wrapper";

import "./main-page.scss";

const MainPage = () => {
  return (
    <>
      <View />
      <CardWrapper settings={{ links: true }} />
    </>
  );
};

export default MainPage;

const View = () => {
  return (
    <article className="useless_text">
      <h1>Wow! Useless text! Wow!!</h1>
      <h2>Important text wwoow</h2>
      <h3>bhlah-blagh-blah</h3>
      <div className="more_useless">
        <div className="more_useless_elem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, facere suscipit assumenda ea ducimus hic itaque
          repudiandae dolor, odit aliquam eaque praesentium velit, quis placeat
          blanditiis necessitatibus minima ullam illo? Vel, pariatur enim amet
          voluptatem at officia facilis cupiditate sed, ea voluptatum nobis
          ipsum tempore? Aperiam cupiditate et cum suscipit vel libero, ab
          veniam magnam, harum itaque modi, doloribus sunt! Officia adipisci,
          hic voluptas minus facilis dolores ea totam quibusdam mollitia veniam
          ipsa animi iusto libero eveniet, et corporis dolore aspernatur unde.
          Ex doloribus excepturi ab esse tenetur, quasi incidunt? Ut est sint
          sapiente sed laborum error iusto nihil assumenda, velit quibusdam
          cumque omnis nesciunt numquam ab quaerat maiores officia facilis sequi
          alias voluptates! Fuga amet quod culpa iure natus. Fu Nostrum commodi
          animi iusto eius, odit quia, ipsum dolore illum veniam deleniti
          asperiores sunt quo officia cumque mollitia porro explicabo sit!
          Nihil, nemo suscipit! A, culpa sit. Voluptatibus, magnam cum.
        </div>
        <div className="more_useless_elem">
          <img
            src="https://i.pinimg.com/736x/c8/17/6d/c8176d58adf7ef6e3fe6b558be935108.jpg"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};
