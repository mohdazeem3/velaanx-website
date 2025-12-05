import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import FarmerCard from '@/components/FarmerCard';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products, farmers } from '@/data/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products.slice(0, 4)
    : products.filter(p => p.category === selectedCategory).slice(0, 4);

  const nearbyFarmers = farmers.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Fresh From The Farm
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover locally grown produce from farmers near you. All products are harvested 
              fresh and delivered to your doorstep.
            </p>
          </div>

          <div className="mb-10">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting fresh produce has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Find Farmers",
                description: "Browse local farmers in your area based on your location.",
                icon: "🗺️"
              },
              {
                step: "02",
                title: "Choose Products",
                description: "Select fresh produce directly from their farms.",
                icon: "🥬"
              },
              {
                step: "03",
                title: "Get Delivered",
                description: "Receive your order fresh at your doorstep.",
                icon: "🚚"
              }
            ].map((item, index) => (
              <div 
                key={item.step}
                className="relative bg-card p-8 rounded-2xl shadow-sm text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl">{item.icon}</span>
                <span className="inline-block text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 mt-8">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Farmers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Farmers Near You
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Meet the hardworking farmers who grow your food with care and passion.
              </p>
            </div>
            <Link to="/farmers" className="mt-4 md:mt-0">
              <Button variant="ghost" className="text-primary">
                View All Farmers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyFarmers.map((farmer, index) => (
              <div 
                key={farmer.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FarmerCard farmer={farmer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Eat Fresh?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of customers enjoying fresh, locally-sourced produce 
            while supporting farmers in your community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="xl">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              Become a Farmer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
