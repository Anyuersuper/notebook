window.addEventListener('DOMContentLoaded', function() { if (!window.md && typeof markdownit !== 'undefined') { window.md = markdownit({ html: true, breaks: true, linkify: true }); } });
