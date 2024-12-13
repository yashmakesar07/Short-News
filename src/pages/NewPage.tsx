
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCube } from "swiper/modules";
// import Card from "@/components/Card";
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';



// import {  Navigation, Pagination } from "swiper/modules";
// // import required modules

// export default function NewPage() {
//   const imageUrl = [
//     {
//       url: "https://swiperjs.com/demos/images/nature-1.jpg",
//     },
//     {
//       url: "https://swiperjs.com/demos/images/nature-2.jpg",
//     },
//     {
//       url: "https://swiperjs.com/demos/images/nature-3.jpg",
//     },
//     {
//       url: "https://swiperjs.com/demos/images/nature-4.jpg",
//     },
//   ];
//   return (
//     <div className=" h-screen w-screen flex justify-center items-center">
//       <Swiper
//         effect={'fade'}
//         grabCursor={true}
//         pagination={true}
//         modules={[EffectCube, Pagination]}
//         className="mySwiper h-full w-full mt-10"
//       >
//         {imageUrl.map((i) => (
//           <SwiperSlide >
//             <Card news={nrw}/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
