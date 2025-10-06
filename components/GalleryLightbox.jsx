import React, { useState } from "react";

const GalleryLightbox = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Event photo ${i + 1}`}
            className="rounded-2xl cursor-pointer object-cover h-32 w-full"
            onClick={() => { setCurrent(i); setOpen(true); }}
          />
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <img src={images[current]} alt="Large event" className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg" />
        </div>
      )}
    </>
  );
};

export default GalleryLightbox;
