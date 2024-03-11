import Logo from "../assets/LOGO1.png";
import LJICCFAM from "../assets/LJICCFAM.png";
import MISSION from "../assets/MISSION.png";
import VISION from "../assets/VISION.png";

export default function About() {
  return (
    <div>
      <div className="container mx-auto py-12 px-4 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="lg:flex lg:items-start">
        <img src={Logo} alt="Logo" className="mb-4 lg:mr-4 w-48 lg:w-96" />
          <div>
            <h3 className="text-xl font-semibold mb-5">LOVE OF JESUS INTERNATIONAL CHRISTIAN CHURCH</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit nihil vel, vitae, quas quasi aperiam reprehenderit quaerat architecto eaque dicta officia. Cupiditate non expedita itaque quo debitis repudiandae voluptatum?</p>
          </div>
        </div>
        <img src={LJICCFAM} alt="Family" className="w-full" />
      </div>
      
      <div className="bg-black text-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:flex lg:items-start">
            <div>
              <h1 className="text-center text-5xl font-semibold mb-5">VISION</h1>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit nihil vel, vitae, quas quasi aperiam reprehenderit quaerat architecto eaque dicta officia. Cupiditate non expedita itaque quo debitis repudiandae voluptatum?</p>
            </div>
          </div>
          <div className="w-full lg:w-auto bg-black p-8">
            <img src={VISION} alt="Vision" className="w-full" />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="lg:flex lg:items-start">
          <div>
            <h1 className="text-center text-5xl font-semibold mb-5">MISSION</h1>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit nihil vel, vitae, quas quasi aperiam reprehenderit quaerat architecto eaque dicta officia. Cupiditate non expedita itaque quo debitis repudiandae voluptatum?</p>
          </div>
        </div>
        <img src={MISSION} alt="Mission" className="w-full" />
      </div>
    </div>
  );
}
