import '../styles/globals.css'
import '../styles/photo-card.css'
import AirbnbCard from './card';



export async function PhotoList() {
  const photos = await getPhotos();
  return (
    <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>
  
      {photos.photos.map(photo => (<AirbnbCard photoLink={photo.src.tiny} key={photo.id} location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
      }</div>
  )

}

// export async function PhotoList() {
//   // const photos = await getPhotos();
//   return (
//     <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>

//       {[1,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5].map(photo => (<AirbnbCard  location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
//       }</div>
//   )

// }



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