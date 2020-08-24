const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Client-ID ${process.env.API_KEY}`,
};

async function getPhotos(handler) {
  const response = await fetch(`${process.env.UNSPLASH_API_URL}/photos`, {
    method: 'GET',
    headers,
  });
  response.json().then(result => handler(result));
}

const UnsplashApi = { getPhotos }

export default UnsplashApi;