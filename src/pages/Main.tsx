import ParallaxBg1 from "../components/ParallaxBg1";
import TextBox from "../components/TextBox";
import ParallaxBg2 from "../components/ParallaxBg2";

const Main = () => {
  return (
    <>
      <ParallaxBg1 />
      <TextBox
        headingChildren="Roberto De Gennaro"
        textChildren="I'm pride ourselves in offering a high quality of service and that begins with appointment based bookings. Our online system allows you to pick a stylist and time that’s convenient for you, and if you can’t make it you can reschedule within 24 hours of your appointment."
      />
      <ParallaxBg2 />
    </>
  );
};

export default Main;
