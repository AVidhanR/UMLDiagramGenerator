export const downloadSVG = (svg: string, filename: string) => {
  // Clean up SVG for better rendering
  const cleanedSvg = svg
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  const blob = new Blob([cleanedSvg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadPNG = (svg: string, filename: string) => {
  // Clean up SVG for better rendering
  const cleanedSvg = svg
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // Set canvas size to 2x for higher quality
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;

      if (ctx) {
        // Set white background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Scale context for higher quality
        ctx.scale(2, 2);
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
              resolve(true);
            }
          },
          "image/png",
          1.0
        ); // Maximum quality
      }
    };

    img.src = "data:image/svg+xml;base64," + btoa(cleanedSvg);
  });
};
