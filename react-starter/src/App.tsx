import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import SolutionPage from "./pages/solution";
import CasesPage from "./pages/cases/index";
import PricingPage from "./pages/pricing";
import AboutPage from "./pages/about";
import AIChat from "./components/aiChat";
import { useAppStore } from "./config/store";
import ChatWindow from "./components/aiChat/ChatWindow";
import MarketingLayout from "./layouts/MarketingLayout";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppContent() {
  const { chatOpen } = useAppStore();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AIChat />
      {chatOpen && <ChatWindow />}
    </>
  );
}

export default function App() {
  return (
    <MarketingLayout>
      <ScrollToTop />
      <AppContent />
    </MarketingLayout>
  );
}