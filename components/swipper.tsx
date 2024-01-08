import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);

interface SwiperComponentProps {
    screenshots: string[];
    onScreenshotClick: (screenshot: string) => void;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
    screenshots,
    onScreenshotClick,
}) => {
    return (
        <div className="swiper-container">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                className="swiper-wrapper"
            >
                {screenshots.map((screenshot, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-full object-cover rounded-md cursor-pointer"
                            onClick={() => onScreenshotClick(screenshot)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
