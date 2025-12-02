import CollectionPage from "@/components/CollectionPage";
import { collectionsData } from "@/data/collectionsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HospitalMedical = () => {
  const collection = collectionsData.find((c) => c.id === "hospital-medical")!;

  return (
    <>
      <Header />
      <CollectionPage collection={collection} />
      <Footer />
    </>
  );
};

export default HospitalMedical;
