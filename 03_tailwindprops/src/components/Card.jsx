import React from "react";

function Card({name,thanking="wecome.." }) {
 // console.log("props : ",props)
 // console.log(props.name) when Card(props)
 console.log(name)
  return (
    <div className="h-screen flex items-center justify-center">
      <a
        href="#"
        className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover w-full rounded-base h-64 md:h-60px md:w-48 mb-4 md:mb-0"
          src="https://media.istockphoto.com/id/1497396873/photo/ready-for-starting-my-beach-holiday.jpg?s=612x612&w=0&k=20&c=Rfb7IbYAZR1hNTF6KUDYq8CVu9Yr4wRgK2VLZIZyORY="
          alt=""
        />
        <div className="flex flex-col justify-between md:p-4 leading-normal">
          <h4>{name}</h4>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
            Streamlining your design process today.
          </h5>
          <p className="mb-6 text-body">
            In today’s fast-paced digital landscape, fostering seamless
            collaboration among Developers and IT Operations.
          </p>
          <div>
            <button
              type="button"
              className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
            
              Read more
              <svg
                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
          <br></br>
          <hr></hr>
          <br />
          {/* if thanking is not given in props then welcome! will be show */}
            {/* {/* <h3>{thanking || " welcome !"} </h3>  when default value is not given above} */}
              <h3>{thanking } </h3> 
        </div>
      </a>
    </div>
  );
}

export default Card;
