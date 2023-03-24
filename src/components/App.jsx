import React, { Component } from 'react'
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button.jsx/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    gallery: [],
    name: '',
    page: 1,
    loadBtn: false,
    visibleLoader: false,
    largeImg: '',
  };

  componentDidMount() {
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.page !== prevState.page) {
      this.fetchImg(this.state.name, this.state.page)
    }

  }

  fetchImg = async (name, page = 1) => {
    try {
      this.setState(state => ({
        ...state, loadBtn: false, visibleLoader: true,
      }))
      const key = '33172087-140883ac21b857d399fef061e';
      const url = `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

      const response = await axios.get(url);
      const galleryArr = response.data.hits.map(({ id, largeImageURL, webformatURL }) => ({
        id, largeImageURL, webformatURL
      }))

      this.setState((state) =>
      ({
        ...state, visibleLoader: false, totalHits: response.data.totalHits,
        gallery: page === 1 ? galleryArr : [...state.gallery, ...galleryArr], loadBtn: true,
      }))
    }
    catch (error) {
      console.dir(error);
    }
  }

  updateName = (name) => {
    this.setState((state) => ({
      ...state, name, page: 1,
    }))
  }

  updatePage = () => {
    this.setState((state) => ({
      ...state, page: state.page + 1
    }))
  }

  openModal = (img = '') => {
    this.setState((state) => ({
      ...state, largeImg: img,
    }))
  }

  render() {
    const { gallery, page, visibleLoader, totalHits, largeImg, loadBtn } = this.state;
    return (
      <>
        <Searchbar updateName={this.updateName}></Searchbar>

        {(page === 1 && visibleLoader) || <ImageGallery gallery={gallery} openModal={this.openModal}></ImageGallery>}

        <Loader visibleLoader={visibleLoader}></Loader>

        {(loadBtn && totalHits !== 0 && page !== Math.ceil(totalHits / 12)) &&
          < Button onClick={this.updatePage} ></Button>}

        {(largeImg) && <Modal largeImg={largeImg} openModal={this.openModal} ></Modal>}
      </>
    )
  }
}
