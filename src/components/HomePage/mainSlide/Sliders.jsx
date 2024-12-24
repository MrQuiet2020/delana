import { Carousel } from '@mantine/carousel';
import ProductCard from './ProductCard';

function Sliders() {
    return (
        <Carousel
            withIndicators
            height={500}
            slideSize='33.33333%'
            slideGap='lg'
            loop
            align='center'
            slidesToScroll={1}>
            {/* NOTE: This place should change base on database */}
            <Carousel.Slide>
                <ProductCard
                    imageSrc={'./s.jpg'}
                    title={'this is a title'}
                    text={'random text'}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <ProductCard
                    imageSrc={'./s.jpg'}
                    title={'this is a title'}
                    text={'random text'}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <ProductCard
                    imageSrc={'./s.jpg'}
                    title={'this is a title'}
                    text={'random text'}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <ProductCard
                    imageSrc={'./s.jpg'}
                    title={'this is a title'}
                    text={'random text'}
                />
            </Carousel.Slide>
        </Carousel>
    );
}

export default Sliders;
