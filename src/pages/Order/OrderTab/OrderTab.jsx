import FoodCard from "../../../components/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    // const Pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // };
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }

            {/* <Swiper pagination={pagination}
                modules={[pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>

                    </div>
                </SwiperSlide>
            </Swiper> */}
        </div>
    );
};

export default OrderTab;