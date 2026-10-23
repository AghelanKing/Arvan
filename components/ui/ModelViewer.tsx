"use client";

import "@google/model-viewer";

export default function ModelViewer() {
  return (
    <model-viewer
      src="/models/CouchSmall-ZOPP3KzNIk.glb"
      auto-rotate
      camera-controls
      disable-zoom
      style={{
        width: "400px",
        height: "400px",
      }}
    />
  );
}
