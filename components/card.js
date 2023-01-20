import PhotoCarousel from "./home/photoCarousel";

export default function AirbnbCard(props) {
  return (
    <div className="bg-white rounded-lg w-[280px]">
      <div className="overflow-hidden relative h-[200px] rounded-[20px]">
        <PhotoCarousel image={props.photoLink} />
      </div>
      <a href="#">
        <h5 className="mb-2 pl-2 text-2xl font-bold tracking-tight text-gray-900">{props.location}</h5>
      </a>
      <div className="pl-3 felex">
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{props.addedTime}</p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{props.duration}</p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{props.price}</p>
      </div>
    </div>
  )
}