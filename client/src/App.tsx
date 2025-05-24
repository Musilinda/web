import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
