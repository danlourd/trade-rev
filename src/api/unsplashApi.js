const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Client-ID ${process.env.API_KEY}`,
};

async function getPhotos() {
  const response = await fetch(`${process.env.UNSPLASH_API_URL}/photos`, {
    method: 'GET',
    headers,
  });
  return response.json();
}

const UnsplashApi = { getPhotos }

export default UnsplashApi;