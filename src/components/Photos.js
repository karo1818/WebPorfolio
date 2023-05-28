import React from 'react';
import axios from 'axios';
import "../styles/Photos.css"
import Filter from './Filter';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      imageUrls: [],
      loading: false,
      showFilter: false,
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      this.setState({ loading: true });

      const accessKey = 'xGZbNKBJgT5IiDjgdemAB2fOJcSkIFqaNWb-ExhYh7k';
      const { searchTerm } = this.state;
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10&query=${searchTerm}`
      );
      const imageUrls = response.data.map((item) => item.urls.regular);
      this.setState({ imageUrls });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    this.fetchImages();
  };

  handleShowFilter = () => {
    this.setState({ showFilter: true });
  };

  render() {
    const { imageUrls, loading, searchTerm, showFilter } = this.state;

    return (
      <div className="divimgs">
        <div className='divbtnapi'>
          {!showFilter && (
            <button className='btnApi' onClick={this.handleShowFilter}>
              Next API
            </button>
          )}
        </div>
        {!showFilter && (
          <h1 className='tittleAPI'>Generation of photos consuming Unsplash API</h1>
        )}
        {!showFilter && (
          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={this.handleSearchTermChange}
              placeholder="Search term"
            />
            <button className='btnApi' onClick={this.handleSearch} disabled={loading}>
              Search
            </button>
            <button className='btnApi' onClick={this.fetchImages} disabled={loading}>
              Generate new images
            </button>
          </div>
        )}
        {showFilter ? (
          <Filter />
        ) : (
          <div className="image-grid">
            {loading ? (
              <p>Loading...</p>
            ) : (
              imageUrls.map((imageUrl, index) => (
                <img key={index} className='imgapi' src={imageUrl} alt="Photos" />
              ))
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Photos;
