/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loader from "./Loader";


const Button = ({
  type,
  text,
  onBtnClick,
  iconName,
  imgPath,
  btnStyle,
  imgStyle,
  loading,
  btn_type,
}) => {
  return (
    <>
      {type == "outline" ? (
        <button
          //type={btn_type}
          className={`border-2 btn flex items-center justify-center p-2 gap-1 border-black text-white bg-[#000AFF] text-[13px] rounded-[200px] ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span className="relative z-10">{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <img
                      className={`${imgStyle} relative z-10 btn-icon`}
                      width={24}
                      height={24}
                      src={imgPath}
                      alt=""
                    />
                  )}
                </>
              )}
              <p className="relative z-10">  
                {text}
              </p>
            </>
          )}
        </button>
      ) : (
        <button
          //type={btn_type}
        //   style={{background: 'linear-gradient(90deg, #22A1FE 0%, #FD18EF 100%)'}}
          className={`flex items-center btn justify-center bg-[#000AFF] gap-1 p-2 text-center text-white text-[13px] rounded-[200px] ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span className="relative z-10">{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <img src={imgPath} className="relative z-10 btn-icon" width={24} height={24} alt="" />
                  )}
                </>
              )}
              <p className="relative z-10">  
                {text}
              </p>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
