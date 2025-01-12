import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            About Our Salon
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/placeholder.svg"
                alt="Salon Interior"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Welcome to BeautySalon, where beauty meets luxury. Our team of
                expert stylists and aestheticians are dedicated to helping you look
                and feel your best.
              </p>
              <p className="text-lg text-muted-foreground">
                With years of experience and a commitment to excellence, we provide
                a wide range of services using only the finest products and
                latest techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src="/placeholder.svg"
                alt={`Portfolio ${i}`}
                className="rounded-lg aspect-square object-cover hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">123 Beauty Street</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 234 567 890</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@beautysalon.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-muted-foreground">Mon-Sat: 9AM - 7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;