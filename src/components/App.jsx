import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button.jsx/Button';
import Loader from './Loader/Loader';

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [loadBtn, setLoadBtn] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);
  const [largeImg, setLargeImg] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setVisibleLoader(true);
      setLoadBtn(false)

      const { galleryArr, totalHits } = await fetchImg(name, page);
      setGallery( (gallery) => page === 1 ? [...galleryArr] : [...gallery, ...galleryArr]);

      setVisibleLoader(false);
      setLoadBtn(true);
      setTotalHits(totalHits);
    }

    fetchData()
      .catch(console.error);

  }, [name, page]);

  const updateName = (name) => {
    setName(name);
    setPage(1)
  }

  const updatePage = () => {
    setPage(page + 1)
  }

  const openModal = (img = '') => {
    setLargeImg(img)
  }

  const fetchImg = async (name, page = 1) => {
    try {
      const key = '33172087-140883ac21b857d399fef061e';
      const url = `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

      const response = await axios.get(url);
      const galleryArr = response.data.hits.map(({ id, largeImageURL, webformatURL }) => ({
        id, largeImageURL, webformatURL
      }))

      return { galleryArr, totalHits: response.data.totalHits }
    }
    catch (error) {
      console.dir(error);
    }
  }

  return (
    <>
      <Searchbar updateName={updateName}></Searchbar>

      {(page === 1 && visibleLoader) || <ImageGallery gallery={gallery} openModal={openModal}></ImageGallery>}

      <Loader visibleLoader={visibleLoader}></Loader>

      {(loadBtn && totalHits !== 0 && page !== Math.ceil(totalHits / 12)) &&
        < Button onClick={updatePage} ></Button>}

      {(largeImg) && <Modal largeImg={largeImg} openModal={openModal} ></Modal>}
    </>
  )
}