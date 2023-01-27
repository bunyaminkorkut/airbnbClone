// import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
// import db, { AddHome } from '../lib/firebase/firebase';
// import '../styles/globals.css'
// import '../styles/photo-card.css'
// import AirbnbCard from './card';
'use client'
import { useEffect, useState } from "react"
import { filterHomes } from "../lib/filter"
import { getPhotos } from "../lib/firebase/firebase"
import useFilterStore from "../lib/store/filterStore"
import AirbnbCard from "./card"


// // export async function PhotoList() {
// //   // const photoList = await getDocs(doc(db, "homes"))
// //   // console.log(photoList)
// //   let photos = []
// //   const querySnapshot = await getDocs(collection(db, "homes"));
// //   querySnapshot.forEach((doc) => {
// //     photos.push(doc.data());
// //   });


// //   return (
// //     <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>

// //       {photos.map(photo => (<AirbnbCard photoLink={photo.src} key={photo.id} location={photo.city+','+photo.country} duration='1-5 December' price={photo.price} />))
// //       }</div>
// //   )

// // }



// // export async function PhotoList() {



// //   const photoList = await getDoc(doc(db, "homes"))

//   return (
//     <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>

//       {photoList.map(photo => (<AirbnbCard photoLink={photo.src.tiny} key={photo.id} location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
//       }</div>
//   )

// }


// // export async function PhotoList() {
// //   // const photos = await getPhotos();
// //   return (
// //     <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>

// //       {[1,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5,2,3,6,5].map(photo => (<AirbnbCard  photoLink={'https://picsum.photos/280/200'}  location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
// //       }</div>
// //   )

// // }



// export async function getPhotos() {

//   let res = await fetch("https://api.pexels.com/v1/search?query=house&per_page=80",
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: '563492ad6f91700001000001725068d95fe4496195a0b55c53402891',     //use the apikey you have generated
//       },
//     });

//   return res.json()
// }


export const Photos = () => {
  const setAllHouses = useFilterStore(state => state.setAllHouses)
  const allHouses = useFilterStore().allHouses
  const [photos, setPhotos] = useState([])
  const [allPhotos, setAllPhotos] = useState([])
  // const [filteredPhotos, setFilteredPhotos] = useState([])
  const setFilterList = useFilterStore(state => state.setFilterList)
  const filters = useFilterStore().filters

  useEffect(() => {
    getPhotos().then(res => { setAllHouses(res); setPhotos(res); setAllPhotos(res) })
  }, [])
  useEffect(() => {
    let filtered = []
    allPhotos.map((photo) => {
      filterHomes({ photo, filters }).then((res) => {
        if (res) {
          filtered.push(photo)
        }
      })
    })
    setPhotos(filtered)
  }, [filters])
  return (
    <div className='grid md:w-[88%] xl:w-[90%] pt-48  place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 sm:grid-cols-1 gap-6'>
      {photos.map(photo => (<AirbnbCard photoLink={photo.src} key={photo.id} location='Turkey' duration='1-5 December' addedTime='1 month ago' price='500$' />))
      }
    </div>
  )

}