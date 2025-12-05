import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Farmer } from '@/data/mockData';

interface FarmerCardProps {
  farmer: Farmer;
}

const FarmerCard = ({ farmer }: FarmerCardProps) => {
  return (
    <Link to={`/farmers/${farmer.id}`}>
      <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={farmer.image}
            alt={farmer.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-xl font-bold text-cream">{farmer.farmName}</h3>
            <p className="text-cream/80 text-sm">{farmer.name}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-golden">
              <Star className="w-4 h-4 fill-golden" />
              <span className="font-semibold">{farmer.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{farmer.distance} km</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{farmer.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {farmer.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
