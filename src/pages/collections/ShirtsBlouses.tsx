import CollectionPage from "@/components/CollectionPage";
import { collectionsData } from "@/data/collectionsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShirtsBlouses = () => {
  const collection = collectionsData.find((c) => c.id === "shirts-blouses")!;

  return (
    <>
      <Header />
      <CollectionPage collection={collection} />
      <Footer />
    </>
  );
};

export default ShirtsBlouses;
