import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faCartPlus} from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
    return ( 
        <div className="w-full max-w-sm sm:w-full bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 outline-none hover:border-gray-700  border-2  transition duration-500 ease-in-out">
            <div className="relative">
                <img className="rounded-t-lg w-full" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg" alt=""/>
                <a className="rounded-full m-2 w-8 h-8 bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:ring-blue-300 flex justify-center absolute bottom-0 right-0">
                    <span className="text-yellow-400 text-xl"><FontAwesomeIcon icon={faFire}/></span>
                </a>

                <span className="rounded-full flex justify-center m-2 bg-slate-400 absolute top-0 left-0">
                    <span className="text-sm mx-2 my-0.5 text-red-500">Top</span>
                </span>
                <span className="m-2 absolute bottom-0 left-0">
                    <p className="text-yellow-400 text-xl"><FontAwesomeIcon icon={faFire}/></p>
                </span>
            </div>
            <div className="p-3">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Name product 
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <div className="flex justify-between items-center">
                    <span className="font-bold">120/200 Rub</span>
                    <a href="#" 
                        className="flex justify-center items-center text-xl font-medium text-center w-10 h-10 text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <FontAwesomeIcon icon={faCartPlus}/> 
                    </a>
                    
                </div>
            
            </div>
        </div>
    );
}
 
export default ProductCard;