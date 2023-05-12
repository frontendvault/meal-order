
import Banner from "../components/Landing/Banner";
import Steps from "../components/Steps";
// import Header from "../components/Header";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
// import Footer from "../components/Footer";
import Layout from "../components/Layout";
import MailingList from "../components/MailingList";
import Cookies from "../components/Cookies";

export default function Home() {
  return (
    <Layout title="MPO Home Page">
      <main className="w-screen bg-white">
        <Banner />
        <Steps />
        <Description />
        <Testimonials />
        <Partners />
        <MailingList/>
        <Cookies/>
      </main>
    </Layout>
  );
}
