import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  // QueryClientProvider: Wraps our app to provide data fetching capabilities (React Query)
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider: Allows us to use tooltips (hover text) anywhere in the app */}
    <TooltipProvider>
      {/* Toaster: The component that actually displays the toast notifications */}
      <Toaster />
      <Sonner />

      {/* BrowserRouter: Enables navigation without reloading the page */}
      <BrowserRouter>
        <Routes>
          {/* Route: Maps a URL path ("/") to a specific component (<Index />) */}
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
