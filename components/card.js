'use client';

export default function AirbnbCard(props) {
  return (
      <div class="max-w-sm bg-white rounded-lg ">
          <img class="rounded-t-lg" src={props.photoLink} alt="" />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.location}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.addedTime}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.duration}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.price}</p>
        </div>
      </div>
  )
}