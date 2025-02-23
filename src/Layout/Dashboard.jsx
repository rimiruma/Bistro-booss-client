import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSave, FaShoppingCart, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart:({cart.length})</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Ad a Review</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/bookings">
                    <FaList></FaList>
                    My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    
                    <li><NavLink to="/order/salad">
                    <FaSave></FaSave>
                    Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                    <FaEnvelope></FaEnvelope>
                    Contact</NavLink>
                    </li>
                    <li><NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;