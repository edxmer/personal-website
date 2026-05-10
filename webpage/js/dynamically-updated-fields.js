// year for the copyright
document.getElementById("current-year").innerText = (new Date()).getFullYear();


// for the shortcut in the search button
// returns "" if on mobile
// returns "⌘K" if on macos desktop
// returns "ctrl-K" if on any other device
document.getElementById("search-shortcut-text").innerText = (() => {
  if (navigator.userAgentData) {
    if (navigator.userAgentData.mobile) return "";
    if (navigator.userAgentData.platform === "macOS") return "⌘K";
    return "ctrl-K";
  }

  // fallback for non-chromium browsers
  const ua = navigator.userAgent;
  const isIPad = /Macintosh/i.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua) || isIPad) return "";
  if (/Macintosh|Mac OS X/i.test(ua) && !isIPad) return "⌘K";
  return "ctrl-K";
})();


async function copy1() {
  try {
    await navigator.clipboard.writeText("python3 -m pip install pywebview");
    const x = document.getElementById("copy1");
    x.innerText = "copied!";
    setTimeout(() => {
      x.innerText = "copy";
    }, 5000);
  }
  catch {
    console.error("Error while copying text.");
  }
} 