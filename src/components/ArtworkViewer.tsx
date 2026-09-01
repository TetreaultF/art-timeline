"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ArtworkViewer({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const imgRef = useRef<HTMLImageElement | null>(null);
  const drag = useRef({ active: false, x: 0, y: 0 });
  const minScale = useRef(1);

  const close = () => {
    setOpen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const computeFit = (img: HTMLImageElement) => {
    const naturalH = img.naturalHeight;
    const naturalW = img.naturalWidth;
    if (!naturalH || !naturalW) return;

    const maxH = window.innerHeight * 0.9;
    const maxW = window.innerWidth * 0.9;

    const ratio = Math.min(maxH / naturalH, maxW / naturalW);

    img.style.width = `${naturalW * ratio}px`;
    img.style.height = `${naturalH * ratio}px`;

    minScale.current = 1;
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  if (!open) {
    return (
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "relative",
          width: "100%",
          height: "75vh",
          cursor: "zoom-in",
        }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
      </div>
    );
  }

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
  
    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    const zoomingIn = e.deltaY < 0;
  
    // ✅ Capture avant le setState
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
  
    setScale((s) => {
      const next = Math.min(8, Math.max(minScale.current, s * factor));
  
      if (zoomingIn) {
        setOffset((o) => ({
          x: o.x - (mouseX - o.x) * (factor - 1),
          y: o.y - (mouseY - o.y) * (factor - 1),
        }));
      } else {
        if (next <= minScale.current) {
          setOffset({ x: 0, y: 0 });
        } else {
          setOffset((o) => ({
            x: o.x * factor,
            y: o.y * factor,
          }));
        }
      }
  
      return next;
    });
  };
  const onMouseDown = (e: React.MouseEvent) => {
    drag.current.active = true;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
    setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
  };

  const onMouseUp = () => {
    drag.current.active = false;
  };

  return (
    <div
      onClick={close}
      onWheel={onWheel}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.95)",
        zIndex: 99999,
        overflow: "hidden",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `
            translate(-50%, -50%)
            translate(${offset.x}px, ${offset.y}px)
            scale(${scale})
          `,
          cursor: drag.current.active ? "grabbing" : "grab",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={(e) => computeFit(e.currentTarget)}
          style={{
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />
      </div>

      <button
        onClick={close}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          fontSize: 28,
          color: "white",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((s) => Math.min(8, s * 1.2));
          }}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "white",
            color: "black",
            border: "none",
            fontSize: 22,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((s) => {
              const next = Math.max(minScale.current, s / 1.2);
              if (next <= minScale.current) setOffset({ x: 0, y: 0 });
              return next;
            });
          }}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "white",
            color: "black",
            border: "none",
            fontSize: 22,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          −
        </button>
      </div>
    </div>
  );
}