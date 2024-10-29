import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card bg-[#008080] text-white w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={props.image}
      alt="Image"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className=" text-2xl card-title">{props.title}</h1>
    <p>{props.des}</p>
    <div className="card-actions mt-1 ">
      <button className="btn btn-ghost bg-[#1D428A]"> <a href={props.btn1}  target='_blank'>Demo</a></button>
      <button className="btn btn-ghost bg-[#1D428A]"> <a href={props.btn2}  target='_blank'>GitHub</a></button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card