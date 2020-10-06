import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";


const Sheader = styled.header`
    color: whitesmoke;
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color:rgba(20,20,20,0.8);
    z-index:10;
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const Item = styled.li`
    height:50px;
    width: 70px;
    text-align:center;
    border-bottom: 5px solid ${props => (props.current ? "#6c5ce7" : "transparent")}; 
    transition: border-bottom 0.3s ease-in-out;
`;
const Slink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const List = styled.ul`
    display: flex;
    padding-left:10px;
`;

const Header = (props) => {
    const {location:{pathname}} = props;
    return (
        <Sheader>
            <List>
                <Item current={pathname === "/"}><Slink to="/">ムービ</Slink></Item>
                <Item current={pathname === "/tv"}><Slink to="/tv">テレビ</Slink></Item>
                <Item current={pathname === "/search"}><Slink to="/search">検索</Slink></Item>
            </List>
        </Sheader>
    );
}
export default withRouter(Header);