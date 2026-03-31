/**
 * Twitter Video Downloader - Background Service Worker
 * Minimal service worker - main logic handled in content script
 */

// Service worker remains active to maintain extension lifecycle
chrome.runtime.onInstalled.addListener(() => {
  // Extension installed successfully
});

// Listen for download requests from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadVideo') {
    chrome.downloads.download({
      url: request.url,
      filename: `twitter-video-${request.tweetId}.mp4`,
      saveAs: false
    });
  }
});
