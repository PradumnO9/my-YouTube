const GOOGLE_API_KEY = "AIzaSyD--TD5BaWn7v-Wk3ZZqBpE9Hc-nN6AYEY";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


// https://console.cloud.google.com/apis/credentials?project=powerful-hall-399506 => for GOOGLE_API_KEY
