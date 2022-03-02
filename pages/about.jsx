const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <br></br>
      <h4>My name is Nabilah Wahab. I am a Front End Developer looking to help other companies build user friendly applications.
      I'm a Certified Computer Science and Information Technology individual with hands-on experience in Front-End programming. Capable of adding multiple features, problem-solving, designing and revamping an existing website.
      </h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
