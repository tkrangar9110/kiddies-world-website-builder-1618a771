
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Requirements from "./pages/Requirements";
import Schedule from "./pages/Schedule";
import Staff from "./pages/Staff";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import ScheduleTour from "./pages/ScheduleTour";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Licensing from "./pages/Licensing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/schedule-tour" element={<ScheduleTour />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/licensing" element={<Licensing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
