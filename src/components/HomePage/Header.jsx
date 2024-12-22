import { BackgroundImage, Title } from '@mantine/core';

function Header() {
    return (
        <BackgroundImage
            src='./background.jpg'
            c={'white'}
            h={'100vh'}
            ff={'Lalezar'}
            display={'flex'}
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
            <Title size={'6rem'} pr={'3rem'}>
                پریمیوم
            </Title>
            <Title size={'6rem'} pr={'6rem'}>
                رنگ موی شنل
            </Title>
            <Title size={'6rem'} pr={'9rem'}>
                در بهترین قیمت
            </Title>
        </BackgroundImage>
    );
}

export default Header;
