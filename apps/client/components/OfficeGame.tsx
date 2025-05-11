'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import officeMap from '@/assets/office-map.png';
import playerSprite from '@/assets/dev-sprite.png';

export default function OfficeGame() {
  const [position, setPosition] = useState({ x: 700, y: 300 });

  const CHARACTER_WIDTH = 48;
  const CHARACTER_HEIGHT = 48;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPosition(pos => {
        const step = 10;

        let newX = pos.x;
        let newY = pos.y;

        switch (e.key.toLowerCase()) {
          case 'w': newY -= step; break;
          case 'a': newX -= step; break;
          case 's': newY += step; break;
          case 'd': newX += step; break;
          default: return pos;
        }

        // Clamp position to stay within the screen
        const maxX = window.innerWidth - CHARACTER_WIDTH;
        const maxY = window.innerHeight - CHARACTER_HEIGHT;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        return { x: newX, y: newY };
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Office background */}
      <Image
        src={officeMap}
        alt="Office"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Character */}
      <div
        className="absolute z-10 w-[48px] h-[48px] bg-contain bg-no-repeat"
        style={{
          left: position.x,
          top: position.y,
          backgroundImage: `url(${playerSprite.src})`,
        }}
      />
    </div>
  );
}
