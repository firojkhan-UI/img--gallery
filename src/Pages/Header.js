import styled from 'styled-components';
const WrapperHeader = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 2rem;
    background: green;
`

const Header = props => {
    return (
        <>
        <WrapperHeader />
        </>
    )
}
export default Header;