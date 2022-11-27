import Image from 'next/image';
import '../styles/globals.css'
import '../styles/photo-card.css'




export async function Photo() {
  const photos = await getPhotos();

  return (
    <div>
      <div className='mx-4' >
        <div className='grid gap-4 grid-cols-4'>
          {photos.photos.map(photo => (
            <div
              key={photo.id}
              className='card'
            >
              <img src={photo.src.tiny} className='m-0' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



async function getPhotos() {

  let res = await fetch("https://api.pexels.com/v1/search?query=house&per_page=80",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: '563492ad6f91700001000001725068d95fe4496195a0b55c53402891',     //use the apikey you have generated
      },
    });

  return res.json()
}