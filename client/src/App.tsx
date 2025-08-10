import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import PrivacyPolicy from "@/pages/privacy-policy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
