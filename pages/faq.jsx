import Layout from "../components/Layout";
import { Faqs } from "@/components/faq";

export default function FaqPage() {
  return (
    <Layout title={"MPO: Frequently Asked Questions"}>
      <div className="bg-gray-50 py-10">
        <div className="bg-gray-50">
          <Faqs />
        </div>
      </div>
    </Layout>
  );
}
