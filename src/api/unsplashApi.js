const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Client-ID ${process.env.API_KEY}`,
};

function getQueryString(params) {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

const photosApiUrl = `${process.env.UNSPLASH_API_URL}/photos`

async function getPhotos(params, handler) {
  const url = `${photosApiUrl}?${getQueryString(params)}`;
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  response.json().then(photos => {
    const ids = [];
    const photosMap = {};
    photos.forEach(photo => {
      ids.push(photo.id);
      photosMap[photo.id] = photo;
    });
    handler({ ids, data: photosMap });
  });
}

const UnsplashApi = { getPhotos }

export default UnsplashApi;