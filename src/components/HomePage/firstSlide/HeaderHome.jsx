import { BackgroundImage, Title } from '@mantine/core';

function Header() {
    return (
        <BackgroundImage
            src='./background.jpg'
            c={'white'}
            h={'90vh'}
            display={'flex'}
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
            <Title ff={'Lalezar'} size={'7rem'} pr={'3rem'}>
                پریمیوم
            </Title>
            <Title ff={'Lalezar'} size={'7rem'} pr={'6rem'}>
                رنگ موی شنل
            </Title>
            <Title ff={'Lalezar'} size={'7rem'} pr={'9rem'}>
                در بهترین قیمت
            </Title>
        </BackgroundImage>
    );
}

export default Header;
