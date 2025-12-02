import CollectionPage from "@/components/CollectionPage";
import { collectionsData } from "@/data/collectionsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResortPoolside = () => {
  const collection = collectionsData.find((c) => c.id === "resort-poolside")!;

  return (
    <>
      <Header />
      <CollectionPage collection={collection} />
      <Footer />
    </>
  );
};

export default ResortPoolside;
