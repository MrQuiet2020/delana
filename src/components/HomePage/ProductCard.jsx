import { Card, Image, Text, Title } from '@mantine/core';
import PropTypes from 'prop-types';

function ProductCard({ title, text, imageSrc }) {
    return (
        <Card shadow='lg' padding={'lg'} radius={'md'}>
            <Card.Section>
                <Image
                    src={imageSrc}
                    w={'100%'}
                    style={{ maxHeight: '20rem' }}
                />
            </Card.Section>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                hic aliquam illo labore suscipit dolorem repellat, vero
                voluptate ex deserunt?
            </p>
        </Card>
    );
}
ProductCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imageSrc: PropTypes.string,
};

export default ProductCard;
