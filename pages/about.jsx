const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4>My name is Nabilah Wahab. I am a Front End Developer looking to help other companies build user friendly applications.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
