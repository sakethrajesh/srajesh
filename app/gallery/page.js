import { ArrowIcon } from 'components/icons';
import Image from 'next/image';
import Link from 'next/link';
import one from '../images/4.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'

const images = {
  'The Narato': {
    location: 'The Narator is a web applicaiotn that enables users to dictate their stories and transform them into picture books using Open-AI’s Dalle Model',
    link: one,
  }, 
  'Powered Down': {
    location: 'Powered Down allows user to select a location for the plug and the plug will turn off when user leaves that location and turns on when the user arrives at the location.',
    link: two,
  }, 
  'Discord Applicaion Tracker': {  
    location: 'This Discord Bot allows users to track which commpines and roles they have applied to an dtrack teh status of thier applications.',
    link: three,
  }, 
  
};

export default async function GalleryPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Gallery</h1>
        <div>
            <p>One of the things I love doing is taking photos. Something about caputing a monet and frezzgin it in time</p>
        </div>
              <div id="main" className="flex flex-wrap
                          ">
                          {Object.entries(images).map(([title, { location, link }]) => {
                            return (
                              <div className=" p-2 md:w-1/2 h-auto w-full">
                              <Image className="w-full" src={link} width={300} height={300} alt={title}/>
                                <div className="bg-neutral-600 max-w-sm rounded overflow-hidden shadow-lg mt-2">
                                  <div className="px-6 py-4">
                                    <div className="font-bold text-md font-serif">The Coldest Sunset</div>
                                    <p className="text-black text-xs font-serif">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                  </div>
                                  {/* <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-serif text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-serif text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-serif text-gray-700 mr-2 mb-2">#winter</span>
                                  </div> */}
                                </div>
                              </div>
                                
                            );
                          })}
                {/* <div className="bg-green-800 m-2 w-auto h-12">2</div>
                <div className="bg-green-700 m-2 w-auto h-12">3</div>
                <div className="bg-green-600 m-2 w-auto h-12">4</div>
                <div className="bg-green-500 m-2 w-auto h-12">5</div>
                <div className="bg-green-400 m-2 w-auto h-12">6</div>
                <div className="bg-green-900 m-2 w-auto h-12">1</div>
                <div className="bg-green-800 m-2 w-auto h-12">2</div>
                <div className="bg-green-700 m-2 w-auto h-12">3</div>
                <div className="bg-green-600 m-2 w-auto h-12">4</div>
                <div className="bg-green-500 m-2 w-auto h-12">5</div>
                <div className="bg-green-400 m-2 w-auto h-12">6</div> */}
            </div>
    </section>
  );
}
