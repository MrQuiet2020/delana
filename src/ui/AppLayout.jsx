import { Flex } from '@mantine/core';
// import { useHover } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/HomePage/Navbar';

function AppLayout() {
    // const { hovered, ref } = useHover();
    return (
        <Flex direction={'column'} pos={'relative'}>
            <Flex
                pos={'absolute'}
                w={'100%'}
                h={'10vh'}
                direction={'row'}
                justify={'space-between'}
                align={'center'}
                style={{ transition: 'all 2s' }}>
                <Navbar />
            </Flex>
            <Flex align={'center'} direction='column'>
                <Outlet />
            </Flex>
        </Flex>
    );
}

export default AppLayout;
