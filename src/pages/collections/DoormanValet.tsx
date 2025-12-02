import CollectionPage from "@/components/CollectionPage";
import { collectionsData } from "@/data/collectionsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DoormanValet = () => {
  const collection = collectionsData.find((c) => c.id === "doorman-valet")!;

  return (
    <>
      <Header />
      <CollectionPage collection={collection} />
      <Footer />
    </>
  );
};

export default DoormanValet;
