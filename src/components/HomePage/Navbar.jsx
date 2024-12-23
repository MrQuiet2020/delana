import { Avatar, Button, Flex, NavLink } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { NavLink as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

const NewStyledNaveLink = styled(NavLink)`
    transition: all 0.5s;
    text-align: center;
    border-radius: 0.6rem;
    background-color: black;
    & span {
        font-size: 1.2rem;
    }
`;
function Navbar() {
    const { hovered, ref } = useHover();
    return (
        <>
            <Avatar src={'./logo.jpg'} h={'5rem'} w={'5rem'} />
            <Flex
                direction={'row'}
                flex={'0.6'}
                gap={'lg'}
                justify={'center'}
                style={{ fontFamily: 'Mirza', transition: 'all 0.5s' }}>
                <NewStyledNaveLink
                    label='تماس با ما'
                    component={ReactLink}
                    to='/home'
                />
                <NewStyledNaveLink
                    label='درباره ما'
                    component={ReactLink}
                    to='/home'
                    ref={ref}
                    style={{
                        color: hovered
                            ? 'var(--mantine-primary-color-4)'
                            : 'var(--mantine-primary-color-7)',
                        backgroundColor: hovered
                            ? 'var(--mantine-primary-color-light-hover)'
                            : 'black',
                    }}
                />

                <NewStyledNaveLink
                    label='محصولات'
                    component={ReactLink}
                    to='/home'
                />
            </Flex>
            <Flex
                flex={'0.3'}
                align={'center'}
                justify={'center'}
                gap={'lg'}
                style={{ fontFamily: 'Mirza' }}>
                <Button flex={'0.3'}>جستوجو</Button>
                <Button flex={'0.3'}>ورود/ثبت نام</Button>
                <Button flex={'0.3'}>سبد</Button>
            </Flex>
        </>
    );
}

export default Navbar;
