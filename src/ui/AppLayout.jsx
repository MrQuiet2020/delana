import { Flex, ScrollArea } from '@mantine/core';
// import { useHover } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/HomePage/Navbar';

function AppLayout() {
    // const { hovered, ref } = useHover();
    return (
        <ScrollArea h={'100vh'}>
            <Flex direction={'column'} pos={'relative'}>
                <Flex
                    w={'100%'}
                    h={'10vh'}
                    bg={'black'}
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
        </ScrollArea>
    );
}

export default AppLayout;
