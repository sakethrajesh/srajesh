import { ArrowIcon } from 'components/icons';
import Image from 'next/image';
import one from '../images/4.jpg'
import two from '../images/2.jpg'
import three from '../images/5.jpg'
import Form from './form'
import Auth from './Auth'
import { supabase } from 'lib/supabaseClient';
import Com from './comments'

const images = {
  'Skipping Rocks': {
    location: 'Utah',
    link: one,
    camera: 'iPhone X'
  }, 
  'Blue Beach': {
    location: 'Arizona',
    link: two,
    camera: 'iPhone X'
  }, 
  'Library Streaks': {  
    location: 'California',
    link: three,    
    camera: 'iPhone X'
  }, 
  
};

export default async function GalleryPage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Gallery</h1>
        <div className='mb-3'>
            <p>Freezing a couple of moments in time.</p>
        </div>
       <Auth/>
                      <div id="main" className="flex flex-wrap">
                          {Object.entries(images).map(([title, { location, link, camera }], id) => {
                            return (
                              <div key={id} className=" p-2 md:w-1/2 h-auto w-full">
                                
                              <Image className="w-full rounded" src={link} width={300} height={300} alt={title}/>
                                <div className="bg-neutral-600 max-w-sm rounded overflow-hidden shadow-lg mt-2">
                                  <div className="px-6 py-4">
                                    <div className="font-bold text-md font-serif mb-2">{title}</div>
                                  <div className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>

                                    <p className="text-black text-xs font-serif">{location}</p>
                                  </div>
                                  <div className='flex flex-row mt-1 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                      <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                      <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-black text-xs font-serif">
                                      {camera}
                                    </p>
                                  </div>
                                  {/* <Form/> */}
                                  <div>
                                    <Com title={title} id={id}/>
                                  </div>
                                </div>
                              </div>
                              </div>
                                
                            );
                          })}
            </div>
    </section>
  );
}
