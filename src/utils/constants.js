const GOOGLE_API_KEY = "AIzaSyBBCogwTJG2EQh3dOfBV_ECKGKl-iVIH-c";

// Popular Video API
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=50&videoId=`;

export const YOUTUBE_SEARCH_USING_SEARCHQUERY_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video&key=${GOOGLE_API_KEY}&q=`;

export const VIDEO_DETAILS_API = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=${GOOGLE_API_KEY}&id=`;

export const LIVE_CHAT_COUNT = 25;

// https://console.cloud.google.com/apis/credentials?project=powerful-hall-399506 => for GOOGLE_API_KEY
