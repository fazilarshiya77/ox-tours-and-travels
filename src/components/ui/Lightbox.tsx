import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  caption?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-black/90 backdrop-blur-md p-4 sm:p-8">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 text-paper-white hover:text-vintage-red bg-ink-black/50 border border-paper-white/20 transition-colors z-10"
        aria-label="Close image gallery"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 p-3 text-paper-white hover:text-vintage-red bg-ink-black/50 border border-paper-white/20 transition-colors z-10"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Frame */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative">
        <img
          src={images[currentIndex]}
          alt={caption || `Gallery slide ${currentIndex + 1}`}
          className="max-h-[75vh] w-auto object-contain border-4 border-paper-white shadow-2xl"
        />

        {/* Editorial Photo Caption */}
        <div className="mt-3 text-center text-paper-warm font-serif text-sm">
          <span>{caption || 'Editorial Travel Archive'}</span>
          <span className="mx-2 text-ink-light">•</span>
          <span className="font-mono text-xs text-paper-aged">
            Plate {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 p-3 text-paper-white hover:text-vintage-red bg-ink-black/50 border border-paper-white/20 transition-colors z-10"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
