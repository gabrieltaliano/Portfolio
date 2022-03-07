import Link from "next/link";
import Positions from "components/Positions";
import ShowOnScroll from "components/ShowOnScroll"
import { useInView } from 'react-intersection-observer';


export default function Quote() {

    const { ref, inView } = useInView();


    return (
        <div className='grow flex flex-col justify-center items-center relative snap-start bg-black' id='quote'>
            {/* <div className="absolute top-0 h-full w-full  ">
                <div className="absolute top-0 w-full h-[160%] bg-gradient-to-b from-black via-black to-green-900 z-0" />
            </div> */}
            {/* <div className="absolute top-0 w-full h-[160%] bg-gradient-to-b from-black via-black to-green-900 z-0" /> */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-black via-black to-[#05190b] z-0" />

            <ShowOnScroll
                className="duration-700 flex grow flex-col justify-evenly z-10 gap-24 lg:gap-0 max-w-4xl p-8 min-h-screen"
                offset={500}
            >
                <h2 className="text-green-400 text-3xl font-IBM-Plex-Mono font pt-2">Passionate about technology, electronics, IoT and web development <span className="text-green-800">(and photograpy)</span></h2>

                <ShowOnScroll
                    className="duration-500 flex flex-col gap-8"
                    offset={300}
                >

                    <h2 className="text-green-400 text-xl font-IBM-Plex-Mono font pt-2">Quick resume of my carrer:</h2>
                    <Positions />
                    <ShowOnScroll offset={-100} className='duration-500 grow w-full z-20 flex relative '>
                        <div className={`btn w-fit mx-auto mt-20 ${inView ? "fadein delayed-900" : ""}`}>
                            <Link href='/#work'>
                                <a ref={ref} className='noselect font-IBM-Plex-Mono font-bold text-green-400 text-xl'>View my work<span className='cursor' >_</span></a>
                            </Link>
                        </div>

                    </ShowOnScroll>
                </ShowOnScroll >
            </ShowOnScroll >

        </div >
    )
}
