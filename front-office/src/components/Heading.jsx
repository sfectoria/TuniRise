import React from 'react'

export default function Heading({tit1,tit2}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12 xl:mb-12 ">
          <h2
            className="section-title text-sm text-center md:text-left"
            style={{
              fontFamily: "AgainstRegular",
            }}
          >
            {tit1}
          </h2>

          <h2
            className={`opacity-20 ${tit1==="OUR TEAM" ? "mx-12":""} text-2xl md:text-7xl`}
            style={{
              fontFamily: "AgainstRegular",

            }}
          >
            {tit2}
          </h2>
        </div>
  )
}
