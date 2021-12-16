import axios from 'axios';

function GetApi(searchQuery, pageNumber) {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=23926259-20170b2e8904d12034176c2be&image_type=photo&orientation=horizontal&per_page=12`,
  );
}

export default GetApi;
