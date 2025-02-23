import "./Carousel.scss";
import { SongCard } from "@Components/Molecules/SongCard";

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  albumUrl: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="carousel">
      <div className="carousel__track">
        {items.map((item) => (
          <SongCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                subtitle={item.subtitle}
                albumUrl={item.albumUrl}            
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
