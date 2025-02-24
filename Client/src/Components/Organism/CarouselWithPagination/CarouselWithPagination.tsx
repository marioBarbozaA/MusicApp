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
  subtitle?: string;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const CarouselWithPagination: React.FC<CarouselWithPaginationProps> = ({
  title,
  subtitle,
  items,
  currentPage,
  totalPages,
  onNext,
  onPrev,
}) => {
  return (
    <section className="carousel-pagination">
      <div className="carousel-pagination__header">
        <div className="carousel-pagination__title-group">
          <h2 className="carousel-pagination__title">{title}</h2>
          {subtitle && <p className="carousel-pagination__subtitle">{subtitle}</p>}
        </div>
        <Pagination
          onPrev={onPrev}
          onNext={onNext}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <Carousel items={items} />
    </section>
  );
};

export default CarouselWithPagination;
