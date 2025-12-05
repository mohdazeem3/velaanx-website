import { MapPin, Plus, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.organic && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Leaf className="w-3 h-3" />
            Organic
          </span>
        )}
        <Button
          variant="hero"
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          onClick={handleAddToCart}
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground text-lg">{product.name}</h3>
          <span className="text-lg font-bold text-primary">
            KSh {product.price}
            <span className="text-sm text-muted-foreground font-normal">/{product.unit}</span>
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground font-medium">{product.farmName}</span>
          </div>
          <div className="flex items-center gap-1 text-secondary">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{product.distance} km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
