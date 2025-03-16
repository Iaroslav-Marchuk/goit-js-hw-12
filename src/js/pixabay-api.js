import axios from 'axios';

export async function searchImages(request, page = 1) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49242094-b67d71fe272541c15bafae494',
      q: request,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
