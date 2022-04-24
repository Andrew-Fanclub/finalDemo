import React, { useState, useEffect } from 'react';
import Carousel from 't-a-e-3d-carousel-reactjs';
import ReactPaginate from 'react-paginate';
import Navigation from './components/navbar';
import Footer from './components/footer';
import AvailablePlushies from './Data/AvailablePlushies';
import './public/main.css';

//take images from cloudinary
const slides = [
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410280/AFC/Octopus_ymdhjt.png'
    },
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410685/AFC/Bread_uoen7x.png'
    },
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410684/AFC/Squid_ixn7ez.png'
    }
];

//DUMMY DATA
const DUMMY_PLUSHIES = [
    {
        id: 1,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 2,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '4.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 3,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '4',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 4,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '4',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 5,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '3.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 6,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '3.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 7,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '3',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 8,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '3',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 9,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '2.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 10,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '2.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 11,
        title: 'Sad Panda',
        price: '70',
        shipping: '6.50',
        rating: '2.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 12,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '2.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 13,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '2.5',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 14,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '2',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 15,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '2',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 16,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '2',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 17,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '1',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 18,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '1',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 19,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '1',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 20,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '0',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 21,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '0',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },
    {
        id: 22,
        title: 'Sad Panda',
        price: '100',
        shipping: '0',
        rating: '0',
        src: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645636700/AFC/DummyPhoto_shmwb0.png'
    },

]

const itemsPerPage = 12;

function Main() {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currPlushies, setCurrPlushies] = useState([]);

    useEffect(() => {
        // Fetch items from another resource.
        const endOffset = itemOffset + itemsPerPage;
        setCurrPlushies(DUMMY_PLUSHIES.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(DUMMY_PLUSHIES.length / itemsPerPage));
    }, [itemOffset]);

    const pageClickHandler = (event) => {
        const newOffset = (event.selected * itemsPerPage) % DUMMY_PLUSHIES.length;
        setItemOffset(newOffset);
    }

    const searchHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg'>
            <nav>
                <Navigation />
            </nav>
            <div className="headerContent mb-5">
                <h1 className='title'>Find the <span className="midWord">perfect</span> plushie</h1>
                <h1 className='titleBottomText'>for you and others!</h1>
                <Carousel imageList={slides} autoplay={true} interval={3000} showArrows={false} className='center' />
            </div>
            <div className="searchContent" onSubmit={searchHandler}>
                <form className="formContent">
                    <input className="searchBox" type="text" placeholder='Panda Plushie' />
                    <button className="searchBarBtn"></button>
                </form>
                <AvailablePlushies list={currPlushies} className="plushContainer" />
                {/* Using Dummy Data */}
                <ReactPaginate
                    breakLabel={"..."}
                    previousLabel={'< previous'}
                    nextLabel={"next >"}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={pageClickHandler}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link matchColor'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link matchColor'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'} />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Main;