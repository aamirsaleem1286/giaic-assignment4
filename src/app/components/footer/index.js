import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F0F0F0] text-[#00000099] py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <div className="flex flex-col items-start mb-8">
              <Image src={"/images/footlogo.png"} alt="image" width={100} height={100} />
              <p className="text-[#00000099] my-8 max-w-md">
                We have clothes that suits your style and which you’re proud to wear. From women to men.
              </p>
              <Image src={"/images/SocialIcon.png"} alt="image" width={200} height={150} />
            </div>

            <div>
              <h2 className="text-2xl text-[#00000099] font-bold  mb-4">Company</h2>
              <ul className="text-[#00000099] space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Works</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-[#00000099] font-bold mb-4">Help</h2>
              <ul className="text-[#00000099] space-y-2">
                <li><a href="#" className="hover:text-white">Customer Support</a></li>
                <li><a href="#" className="hover:text-white">Delivery Details</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-[#00000099] font-bold mb-4">FAQ</h2>
              <ul className="text-[#00000099] space-y-2">
                <li><a href="#" className="hover:text-white">Account</a></li>
                <li><a href="#" className="hover:text-white">Manage Deliveries</a></li>
                <li><a href="#" className="hover:text-white">Orders</a></li>
                <li><a href="#" className="hover:text-white">Payments</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-[#00000099] font-bold mb-4">Resources</h2>
              <ul className="text-[#00000099] space-y-2">
                <li><a href="#" className="hover:text-white">Free eBooks</a></li>
                <li><a href="#" className="hover:text-white">Development Tutorial</a></li>
                <li><a href="#" className="hover:text-white">How to - Blog</a></li>
                <li><a href="#" className="hover:text-white">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#0000001A] mt-10 pt-6  text-gray-400">
             Shop.co © 2000-2023, All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
