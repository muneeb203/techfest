import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart, Folder, Image as ImageIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface GalleryFolder {
  id: number;
  title: string;
  subtitle: string;
  coverImage: string;
  imageCount: number;
  description: string;
  images: string[];
}

const GalleryPage = () => {
  const [selectedFolder, setSelectedFolder] = useState<GalleryFolder | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // List of all images in TF_ISL25 folder
  const tfIsl25Images = [
    '/images/TF_ISL25/97.png',
    '/images/TF_ISL25/98.png',
    '/images/TF_ISL25/99.png',
    '/images/TF_ISL25/100.png',
    '/images/TF_ISL25/101.png',
    '/images/TF_ISL25/102.png',
    '/images/TF_ISL25/Techfest 1.jpg',
    '/images/TF_ISL25/Techfest 2.jpg',
    '/images/TF_ISL25/Techfest 3.jpg',
    '/images/TF_ISL25/Techfest 4.jpg',
    '/images/TF_ISL25/Techfest 5.jpg',
  ];

  // List of all images/videos in BTS folder
  const btsImages = [
    '/images/BTS/103.png',
    '/images/BTS/104.png',
    '/images/BTS/IMG-20250910-WA0005.jpg',
    '/images/BTS/IMG-20250910-WA0006.jpg',
    '/images/BTS/IMG-20250910-WA0007.jpg',
    '/images/BTS/VID-20250910-WA0004.mp4',
    '/images/BTS/VID-20250910-WA0005.mp4',
    '/images/BTS/WhatsApp Video 2025-09-10 at 00.34.57_b5513a0c.mp4',
    '/images/BTS/WhatsApp Video 2025-09-10 at 00.34.59_c0fc5ae5.mp4',
  ];

  const galleryFolders = [
    {
      id: 1,
      title: 'TechFest\'25 Islamabad',
      subtitle: 'February 2025',
      coverImage: 'images/TF_ISL25/Techfest 3.jpg',
      imageCount: tfIsl25Images.length,
      description: 'Our inaugural event in the capital city with amazing workshops and networking',
      images: tfIsl25Images
    },
    {
      id: 2,
      title: 'TechFest\'25 Islamabad Behind the Scenes',
      subtitle: 'February 2025',
      coverImage: 'images/BTS/103.png',
      imageCount: btsImages.length,
      description: 'Hands-on workshops and coding sessions in Islamabad',
      images: btsImages
    }
  ];

  const allFolders = [...galleryFolders];

  const openFolder = (folder: GalleryFolder) => {
    setSelectedFolder(folder);
  };

  const closeFolder = () => {
    setSelectedFolder(null);
    setLightboxImage(null);
  };

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (selectedFolder && lightboxIndex < selectedFolder.images.length - 1) {
      const newIndex = lightboxIndex + 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedFolder.images[newIndex]);
    }
  };

  const prevImage = () => {
    if (selectedFolder && lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedFolder.images[newIndex]);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setUploadedImages(prev => [...prev, ...newImages]);
    }
  };

  React.useEffect(() => {
    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [lightboxImage, lightboxIndex]);

  if (selectedFolder) {
    return (
      <div className="min-h-screen px-4 py-20">
        <div className="container mx-auto">
          {/* Folder Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={closeFolder}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {selectedFolder.title}
              </h1>
              <p className="text-gray-400">{selectedFolder.subtitle}</p>
            </div>

            <div className="text-right">
              <p className="text-gray-400">{selectedFolder.images.length} photos</p>
            </div>
          </div>

          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {selectedFolder.description}
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedFolder.images.map((image, index) => {
              const isVideoFile = image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.avi');
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  onClick={() => openLightbox(image, index)}
                >
                  {isVideoFile ? (
                    <video
                      src={image}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      muted
                      loop
                      onMouseEnter={(e: React.MouseEvent<HTMLVideoElement>) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e: React.MouseEvent<HTMLVideoElement>) => (e.target as HTMLVideoElement).pause()}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`${selectedFolder.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lightbox */}
          {lightboxImage && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="relative w-full h-full max-w-full max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                {lightboxIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {lightboxIndex < selectedFolder.images.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* Image/Video */}
                {lightboxImage!.endsWith('.mp4') || lightboxImage!.endsWith('.webm') || lightboxImage!.endsWith('.avi') ? (
                  <video
                    src={lightboxImage}
                    controls
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <img
                    src={lightboxImage}
                    alt={`${selectedFolder!.title} ${lightboxIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{selectedFolder.title}</h3>
                      <p className="text-sm text-gray-300">
                        {lightboxIndex + 1} of {selectedFolder.images.length}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-20">
      <Helmet>
        <title>TechFest Pakistan - Event Gallery</title>
        <meta name="description" content="Relive the amazing moments from TechFest events. Browse our photo and video gallery showcasing workshops, hackathons, and networking sessions from Islamabad and Peshawar chapters." />
        <meta name="keywords" content="TechFest, gallery, photos, videos, events, workshops, hackathons, Pakistan, technology festival" />
      </Helmet>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Relive the amazing moments from our tech events across Pakistan. Browse through our collection of memories and highlights.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {galleryFolders.reduce((total, folder) => total + folder.imageCount, 0)}
            </div>
            <div className="text-gray-400">Total Photos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {galleryFolders.length}
            </div>
            <div className="text-gray-400">Event Albums</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-400">Cities Covered</div>
          </div>
        </div>

        {/* Gallery Folders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFolders.map((folder) => (
            <div
              key={folder.id}
              className="group relative cursor-pointer"
              onClick={() => openFolder(folder)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                {/* Folder Icon */}
                <div className="absolute top-4 left-4 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center opacity-90">
                  <Folder className="w-6 h-6 text-white" />
                </div>

                {/* Image Count Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {folder.imageCount} photos
                </div>

                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={folder.coverImage}
                    alt={folder.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20"></div>
                </div>

                {/* Folder Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 text-sm font-medium">{folder.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {folder.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {folder.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Click to explore</span>
                    <div className="flex items-center space-x-1 text-gray-400 group-hover:text-blue-400 transition-colors">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm">{folder.imageCount}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Images */}
        <div className="mt-12 text-center">
          <label htmlFor="upload-input" className="cursor-pointer inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            Upload Images
          </label>
          <input
            id="upload-input"
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;