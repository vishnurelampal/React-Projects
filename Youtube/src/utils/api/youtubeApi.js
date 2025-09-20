const youtubeApiKey = "AIzaSyApbEEx6kmJdexK6m1knmG4SNcOrNMxayM";
const url =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  youtubeApiKey;
const optionsIconImage =
  "https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-ui-icon-black-glyph-of-a-vertical-menu-with-three-dots-vector-png-image_47699582.jpg";

const searchUrl =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export default url;
export { optionsIconImage, searchUrl };
