
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import QuotationsList from "./pages/QuotationsList";
import TruckersList from "./pages/TruckersList";
import NotFound from "./pages/NotFound";
// Toaster, Sonner, TooltipProvider imports removed as their source files are TSX or deleted.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider removed */}
    {/* Toaster and Sonner removed */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/quotations" replace />} />
        <Route path="/quotations" element={
          <Layout>
            <QuotationsList />
          </Layout>
        } />
        <Route path="/truckers" element={
          <Layout>
            <TruckersList />
          </Layout>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* TooltipProvider closing tag removed */}
  </QueryClientProvider>
);

export default App;
