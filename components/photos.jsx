import '../styles/globals.css'
import '../styles/photo-card.css'
import AirbnbCard from './card';



export async function Photo() {
  const photos = await getPhotos();
  return (
    photos.photos.map(photo => (<AirbnbCard photoLink={photo.src.tiny} key={photo.id} location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
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