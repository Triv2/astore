
interface AboutSectionProps {}

const AboutSection = () => {
  return (
    <div className="w-full h-full px-5 py-6 flex flex-col items-center gap-y-4">
      <h1 className="text-3xl font-bold">WELCOME TO STAR MART!</h1>
      <p className="font-semibold text-gray-500">SHOP SMART! SHOP STAR MART</p>
      <p className="font-semibold text-gray-500">WHY SHOP ON EARTH WHEN YOU CAN SHOP IN SPACE?</p>
      <p className="font-semibold text-gray-500">OUR DISCOUNTS ARE SO HUGE THE GRAVITY WILL PULL YOU BACK TO EARTH!</p>
    </div>
  );
}
export default AboutSection;