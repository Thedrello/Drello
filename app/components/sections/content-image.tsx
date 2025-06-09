'use client';

import React from 'react';
import Image from 'next/image';

interface ContentImageProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const ContentImage = ({ src, alt, title, description }: ContentImageProps) => {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {(title || description) && (
            <div className="space-y-4">
              {title && <h3 className="text-2xl font-bold">{title}</h3>}
              {description && <p className="text-gray-600">{description}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentImage;
