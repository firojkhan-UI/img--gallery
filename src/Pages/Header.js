import styled from 'styled-components';
import Cards from './Cards';
const WrapperHeader = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 2rem;
    background: green;
`
const WrapperCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`

const Header = props => {
    const dt = props.res;
    return (
        <>
        <WrapperHeader />
        <WrapperCards>
        {dt?.map( (item) => 
        <Cards 
         auth = {item.author}
         url = {item.download_url}
         id = {item.id} 
        />
        )}
        </WrapperCards>
        </>
    )
}
export default Header;