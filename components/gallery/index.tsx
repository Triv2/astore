import { Image } from "@/types";

interface GalleryProps {
  images: Image[];
}

const Gallery:React.FC<GalleryProps> = ({
  images,
}) => {
  return (
  <div>
  Gallery
  </div>
  );
}
export default Gallery;