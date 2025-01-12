import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-rose-50 to-rose-100">
        <div className="container text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl">
            Your Beauty Journey <br /> Starts Here
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium beauty products and services
            designed to enhance your natural beauty.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;