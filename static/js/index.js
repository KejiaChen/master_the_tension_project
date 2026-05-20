const scrollButton = document.querySelector(".scroll-top");
const copyButton = document.querySelector(".copy-button");

if (scrollButton) {
  const updateScrollButton = () => {
    if (window.scrollY > 320) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", updateScrollButton, { passive: true });
  updateScrollButton();

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const targetId = copyButton.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent);
      copyButton.textContent = "Copied";
      copyButton.classList.add("is-copied");
      setTimeout(() => {
        copyButton.textContent = "Copy";
        copyButton.classList.remove("is-copied");
      }, 1800);
    } catch (error) {
      console.error("Failed to copy BibTeX:", error);
    }
  });
}
