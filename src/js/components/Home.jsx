import React from "react";


export const Home = ({ digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) => {

    return (
        
           
                <div className="  d-flex justify-content-center py-2 w-auto bigcontainer">
                    <div className="littlecontainer">
                        <i className="far fa-clock text-white  px-4 mx-2 clock"></i>
                    </div>
                    <div className="digitSix text-white  border border-dark rounded px-4 mx-2 littlecontainer ">{digitSix % 10}</div>
                    <div className="digitFive text-white  border border-dark rounded px-4 mx-2 littlecontainer">{digitFive % 10}</div>
                    <div className="digitFour text-white  border border-dark rounded px-4 mx-2 littlecontainer">{digitFour % 10}</div>
                    <div className="digitTree text-white  border border-dark rounded px-4 mx-2 littlecontainer ">{digitThree % 10}</div>
                    <div className="digitTwo text-white  border border-dark rounded px-4 mx-2 littlecontainer">{digitTwo % 10}</div>
                    <div className="digitOne text-white  border border-dark rounded px-4 mx-2 littlecontainer">{digitOne % 10}</div>
                </div>
    );
}