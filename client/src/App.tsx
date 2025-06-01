import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Blog from "@/pages/blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
