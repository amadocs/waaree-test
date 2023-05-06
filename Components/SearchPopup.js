import _ from 'lodash'
import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, row, Col, Row, Modal} from 'react-bootstrap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { gsap} from "gsap";

const SearchPopup = (props) => {
    gsap.registerPlugin(TextPlugin);

    const [show, setShow] = useState(false);
    const handleClose = () => 
    {
        setShow(false);
        setShowClass("");

    }
    const handleShow = () => {
        setShow(true);

        setTimeout(function() {
            const SearchPlaceholder = "What are you looking for?";
            const SearchAnimation = gsap.timeline();

            SearchAnimation.to("#typedtext-all",{ 
            duration:1.2,
            text:SearchPlaceholder,
            delimiter:" ",
            });
            SearchAnimation.play();
        }, 300);
            
    };
    
    const [showClass, setShowClass] = useState('show');


    const handleHideClass = () => {
        setShowClass("hide")
    };

    const [filteredResults, setFilteredResults] = useState([]);
    const [search, setSearch] = useState('');
    const searchInput = (e) =>{
        
    
            setSearch(e.target.value)
    
            if (search !== '') {
                const filteredData = props.Slider.filter((item) => {
                    return Object.values(item.attributes.Title).join('').toLowerCase().includes(search.toLowerCase())
                }) 
                setFilteredResults(filteredData)
            }
  
            return filteredResults
    }
    
    return(
        <>
        <Nav.Link href="#" id="btn-search" className="search-menu" aria-label='Search popup'>
            <span className="search-icon" onClick={handleShow}>
                <i className="fas fa-search"></i>
            </span>
            <div id="btn-search-close" className="btn-search-close" style={{display:"none"}} onClick={handleClose}>
                <span className="close-icon"></span>
            </div>                   
        </Nav.Link>
            <Modal className="search-popup" show={show}>
                <Modal.Body>
                    <div className="search">
                        <Container>
                            <div  className="search__form">
                            <input id="search__input" className="search__input" name="keys" type="search" placeholder="" autoComplete="off" autoCorrect="off"
                                    autoCapitalize="off" spellCheck="false" required onFocus={handleHideClass} onClick={searchInput}/>
                                <span id="typedtext" className={showClass}><span id="typedtext-all" className="typedtext-all-wrap"></span><span className='underscore'>_</span></span>
                            </div>
                            {/* <form className="search__form" action="https://www.waaree.com/search.php" method="post" autoComplete="off">
                               
                            </form> */}
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>
        
        
        </>
    )

}

export default SearchPopup;