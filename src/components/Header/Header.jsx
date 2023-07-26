import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart"; 

const Header = () => {
    const [scroll,setScroll]= useState(false);
    const [ShowCart,setShowCart ]= useState(false);
    const [showSearch, setShowSearch ] =useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const handlerscroll=() => {
        const offset= window.scrollY;
        if(offset>200)
        {
         setScroll(true);
        } 
        else{
            setScroll(false);
        }
          
    }

    useEffect( () =>{
      window.addEventListener("scroll",handlerscroll)
    },[]);

   

    return (
        <> 
    <header className={`main-header ${scroll ? 'sticky-header': ''}`}>
        <div className="header-content">
            <ul className="left">
                <li  onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/about")}>About</li>
                <li onClick={() => navigate("/category")}>Category</li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>Hifi-Store.</div>
            <div className="right">
                <TbSearch onClick={setShowSearch}/>
                <AiOutlineHeart/>
                <span className="cart-icon" onClick={() => setShowCart(true) }>
                    <CgShoppingCart/>
                    { !! cartCount && <sapn className="span">{cartCount}</sapn>}
                </span>
            </div>
        </div>
         
    </header>
      { ShowCart && <Cart setShowCart={setShowCart} /> } 
      {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
)};

export default Header;
