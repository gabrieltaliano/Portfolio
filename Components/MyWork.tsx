import mw from '../public/images/mitsushiowelding.jpg';
import yb_pc from '../public/images/yb-pc.jpg';
import yb_mobile from '../public/images/yb-mobile.jpg';
import tb from '../public/images/tb.png';
import rk from '../public/images/rk-b.png';

export default function MyWork() {
    return (
        <div className='grow flex flex-nowrap flex-col justify-center items-center relative snap-start bg-gradient-to-b from-[#05190b] via-[#1a3020] to-slate-900 ' id='work'>
            {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-green-900 to-slate-900 z-0" /> */}

            <div className="min-h-screen w-full flex flex-col justify-evenly items-center z-10 gap-4 lg:gap-16  p-8">
                <h2 className="text-green-400 text-4xl font-IBM-Plex-Mono font pt-2">My work<span className='cursor' >_</span></h2>


                <div className='flex flex-wrap justify-evenly items-center gap-0 w-full'>
                    <div className="relative overflow-hidden bg-gray-300 min-w-[10rem] sm:min-w-[18rem]  h-fit max-w-[50vh] aspect-[9/16] rounded-2xl block m-8 shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105"
                        style={{ backgroundImage: `url(${tb.src})` }}>
                        <div className='absolute w-full h-full border-gray-800 opacity-50 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105'></div>
                    </div>

                    <div className="bg-gray-300 min-w-[18rem] w-[20vmax] h-fit aspect-video rounded-2xl block m-8 shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105"
                        style={{ backgroundImage: `url(${mw.src})` }}>
                    </div>

                    <div className='grid grid-cols-5 grid-rows-4 h-[40vh] w-[80vmin] max-w-[20rem]'>
                        <div className="bg-gray-300 h-fit aspect-video col-start-1 z-30 col-span-4 row-start-3 row-span-1 rounded-2xl block shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105"
                            style={{ backgroundImage: `url(${yb_pc.src})` }}>
                        </div>
                        <div className="relative overflow-hidden bg-gray-300 min-h-[18rem] h-[20vmax] z-20 col-start-3 col-span-3 aspect-[9/16] rounded-2xl block shadow-xl shadow-gray-900 bg-cover bg-center duration-300 hover:scale-105"
                            style={{ backgroundImage: `url(${yb_mobile.src})` }}>
                            <div className='absolute w-full h-full border-gray-800 opacity-50 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105'></div>

                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-gray-300 min-w-[10rem] sm:min-w-[18rem]  h-fit max-w-[50vh] aspect-[9/16] rounded-2xl block m-8 shadow-xl shadow-gray-900 bg-cover bg-center duration-300 hover:scale-105"
                        style={{ backgroundImage: `url(${rk.src})` }}>
                        <div className='absolute w-full h-full border-gray-800 opacity-50 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105'></div>
                    </div>

                </div>


            </div>
        </div>
    )
}
