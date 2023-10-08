import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="w-full bg-white px-4 py-6 text-black">
    <div
        className="container md:mx-auto lg:mx-auto xl:mx-auto flex flex-col-reverse gap-5 md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        {/* <!-- logo copyright --> */}
        <div className="">
            <p className="text-xs">&copy; 2023 Smoke inc. All rights reserved.</p>
        </div>
    </div>
</footer>
</>
  )
}

export default Footer