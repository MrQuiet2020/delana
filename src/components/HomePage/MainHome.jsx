import { Flex, Title } from '@mantine/core';
import Sliders from './Sliders';

function Main() {
    return (
        <>
            <Flex
                direction={'column'}
                h={'100vh'}
                ta={'center'}
                ff={'Lalezar'}
                justify={'center'}
                gap={'5rem'}>
                <Flex direction={'column'}>
                    <Title>محصولات ویژه</Title>
                    <Title>از پر فروش ترین محصولات</Title>
                </Flex>
                <Sliders />
            </Flex>
        </>
    );
}

export default Main;
