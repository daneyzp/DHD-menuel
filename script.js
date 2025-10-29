// File type icons
const icons = {
 pdf: "https://daneyzp.github.io/DHD-menuel/pdf.png",
  doc: "https://daneyzp.github.io/DHD-menuel/doc.svg",
  docx: "https://daneyzp.github.io/DHD-menuel/docx.png",
  xls: "https://daneyzp.github.io/DHD-menuel/xls.svg",
  xlsx: "https://daneyzp.github.io/DHD-menuel/xlsx.svg",
  jpg: "https://daneyzp.github.io/DHD-menuel/jpg.png",
  jpeg: "https://daneyzp.github.io/DHD-menuel/jpeg.png",
  png: "https://daneyzp.github.io/DHD-menuel/png.png",
  gif: "https://daneyzp.github.io/DHD-menuel/gif.gif",
  html: "https://daneyzp.github.io/DHD-menuel/html.svg",
  css: "https://daneyzp.github.io/DHD-menuel/css.svg",
  js: "https://daneyzp.github.io/DHD-menuel/js.svg",
  txt: "https://daneyzp.github.io/DHD-menuel/txt.svg",
  php: "https://daneyzp.github.io/DHD-menuel/php.svg",
  zip: "https://daneyzp.github.io/DHD-menuel/zip.svg",
  rar: "https://daneyzp.github.io/DHD-menuel/rar.svg",
  default: "https://daneyzp.github.io/DHD-menuel/default.png"
};

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("fileContainer");

  if (!manualFiles || manualFiles.length === 0) {
    container.innerHTML = "<p>No files available.</p>";
    return;
  }

  manualFiles.forEach(file => {
    const iconURL = icons[file.type] || icons.default;
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <img class="file-icon" src="${iconURL}" alt="${file.type.toUpperCase()} icon">
      <div class="file-info">
        <div class="file-name">${file.name}</div>
        <div class="file-size">${file.size}</div>
      </div>
      <a href="${file.link}" class="download-btn" target="_blank" title="Download">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path fill="white" d="M12 16l4-4h-3V4h-2v8H8l4 4zm4 4H8c-1.1 0-2-.9-2-2v-2h2v2h8v-2h2v2c0 1.1-.9 2-2 2z"/>
        </svg>
      </a>
    `;
    container.appendChild(card);
  });
});
