import { Carousel } from "@material-tailwind/react";
import EVENTSBG from "../assets/EVENTSBG.png";
import EVENTS from "../assets/EVENTS.png";

export default function Events() {
    return (
        <div className="mt-10 h-screen flex flex-col items-center justify-center relative">
            <img
                src={EVENTSBG}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <h1 className="mb-10 font-extrabold text-white text-4xl z-20">EVENTS</h1>
            <div style={{ maxWidth: '40%', maxHeight: '40%'}} className="z-20">
                <Carousel className="rounded-xl" responsive={[
                    {
                        breakpoint: '1024px',
                        options: {
                            slidesPerPage: 1,
                        }
                    }
                ]}>
                    <img
                        src={EVENTS}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
        </div>
    )
}
