import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FarmerCard from '@/components/FarmerCard';
import { farmers } from '@/data/mockData';
import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

const Farmers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFarmers = farmers.filter(farmer =>
    farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.farmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farmer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort by distance
  const sortedFarmers = [...filteredFarmers].sort((a, b) => a.distance - b.distance);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 text-center">
            Local Farmers
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Discover and connect with trusted farmers in your community.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search farmers or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>Showing farmers near Nairobi, Kenya</span>
          </div>
        </div>
      </section>

      {/* Farmers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {sortedFarmers.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedFarmers.map((farmer, index) => (
                <div 
                  key={farmer.id} 
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FarmerCard farmer={farmer} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground">No farmers found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Farmers;
