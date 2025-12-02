import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FrontDesk from "./pages/collections/FrontDesk";
import Restaurant from "./pages/collections/Restaurant";
import Housekeeping from "./pages/collections/Housekeeping";
import DoormanValet from "./pages/collections/DoormanValet";
import ResortPoolside from "./pages/collections/ResortPoolside";
import Spa from "./pages/collections/Spa";
import HospitalMedical from "./pages/collections/HospitalMedical";
import ShirtsBlouses from "./pages/collections/ShirtsBlouses";
import TrousersSkirts from "./pages/collections/TrousersSkirts";
import ApronsAccessories from "./pages/collections/ApronsAccessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections/front-desk" element={<FrontDesk />} />
          <Route path="/collections/restaurant" element={<Restaurant />} />
          <Route path="/collections/housekeeping" element={<Housekeeping />} />
          <Route path="/collections/doorman-valet" element={<DoormanValet />} />
          <Route path="/collections/resort-poolside" element={<ResortPoolside />} />
          <Route path="/collections/spa" element={<Spa />} />
          <Route path="/collections/hospital-medical" element={<HospitalMedical />} />
          <Route path="/collections/shirts-blouses" element={<ShirtsBlouses />} />
          <Route path="/collections/trousers-skirts" element={<TrousersSkirts />} />
          <Route path="/collections/aprons-accessories" element={<ApronsAccessories />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
