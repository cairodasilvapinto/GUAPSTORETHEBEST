import { useState, useEffect } from 'react';
import Slider1 from '../Assets/slider1.png';
import Slider2 from '../Assets/slider2.png';
import Slider3 from '../Assets/slider3.png';
import Slider4 from '../Assets/slider4.png';
import Slider5 from '../Assets/slider5.png';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = () => {
    const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const slideInterval = setInterval(next, 3000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt="Slider Image"
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-cinza/70 text-white hover:bg-cinza"
                >
                    <ChevronLeft size={35} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-cinza/70 text-white hover:bg-cinza"
                >
                    <ChevronRight size={35} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-cinza rounded-full ${
                                curr === i ? 'p-2' : 'bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
