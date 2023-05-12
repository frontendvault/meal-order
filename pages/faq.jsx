import Layout from "../components/Layout";
import FAQ from "../components/FAQ";

const faq = () => {
  return (
    <Layout title={"MPO: Frequently Asked Questions"}>
      <div className="bg-gray-50 py-10">
        <FAQ />
      </div>
    </Layout>
  );
};

export default faq;
