import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Marketing Site Pages
import Home from "@/pages/home";
import Pricing from "@/pages/pricing";
import FAQ from "@/pages/faq";
import Support from "@/pages/support";
import DeleteAccount from "@/pages/delete-account";
import { Privacy, Terms } from "@/pages/legal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/faq" component={FAQ} />
      <Route path="/support" component={Support} />
      <Route path="/delete-account" component={DeleteAccount} />
      <Route path="/account-deletion" component={DeleteAccount} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
