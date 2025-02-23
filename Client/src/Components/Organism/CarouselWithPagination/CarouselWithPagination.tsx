import { useState } from "react";
import "./CarouselWithPagination.scss";
import Carousel from "@Components/Molecules/Carousel/Carousel";
import Pagination from "@Components/Molecules/Pagination/Pagination";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  albumUrl: string;
}

interface CarouselWithPaginationProps {
  title: string;
  items: Item[];
  limit: number;
  subtitle?: string;
  onSeeMore?: () => void; 
}

const CarouselWithPagination: React.FC<CarouselWithPaginationProps> = ({
  title,
  subtitle,
  items,
  limit,
  onSeeMore,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentItems = items.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="carousel-pagination">
      <div className="carousel-pagination__header">
        <div className="carousel-pagination__title-group">
          <h2 className="carousel-pagination__title">{title}</h2>
          {subtitle && <p className="carousel-pagination__subtitle">{subtitle}</p>}
        </div>
        <Pagination
          onPrev={handlePrev}
          onNext={handleNext}
          onSeeMore={onSeeMore}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

      <Carousel items={currentItems} />
    </section>
  );
};

export default CarouselWithPagination;
