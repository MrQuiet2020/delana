import { Card, Image, Text, Title } from '@mantine/core';
import PropTypes from 'prop-types';

function ProductCard({ title, text, imageSrc }) {
    return (
        <Card shadow='lg' padding={'lg'} radius={'md'}>
            <Card.Section>
                <Image src={imageSrc} />
            </Card.Section>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Card>
    );
}
ProductCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imageSrc: PropTypes.string,
};

export default ProductCard;
