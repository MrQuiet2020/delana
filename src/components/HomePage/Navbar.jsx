import { Avatar, Button, Flex, NavLink } from '@mantine/core';
// import { useHover } from '@mantine/hooks';
import { NavLink as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

const NewStyledNaveLink = styled(NavLink)`
    transition: all 0.5s;
    text-align: center;
    border-radius: 0.5rem;
    & span {
        font-size: 1.2rem;
    }
`;
function Navbar() {
    return (
        <>
            <Avatar src={'./logo.jpg'} h={'5rem'} w={'5rem'} />
            <Flex
                direction={'row'}
                flex={'0.6'}
                gap={'lg'}
                justify={'center'}
                style={{ fontFamily: 'Mirza' }}>
                <NewStyledNaveLink label='درباره ما' component={ReactLink} />
                <NewStyledNaveLink label='فروشگاه' component={ReactLink} />
                <NewStyledNaveLink label='فروشگاه' component={ReactLink} />
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
