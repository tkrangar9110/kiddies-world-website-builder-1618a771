
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, caption }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <Button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-white text-black hover:bg-gray-200 rounded-full p-2 z-10"
          size="sm"
        >
          <X className="h-4 w-4" />
        </Button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
            <p className="text-center font-medium">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
