# My-YouTube

# Important

- Enable YouTube Data API V3
  - https://console.cloud.google.com/marketplace/product/google/youtube.googleapis.com?q=search&referrer=search&project=powerful-hall-399506
- Generate your own GOOGLE_API_KEY to use YouTube live API's
  - https://console.cloud.google.com/apis/credentials?project=powerful-hall-399506
- After this put your GOOGLE_API_KEY inside src=>utils=>constant.js
- Enable Allow CORS chrome extension to avoid CORS errors
- After this use this amazing YouTube like APP 🚀

# Features

- YouTube like UI
  - Header
  - Sidebar
  - Body comp -> videos are showing
  - Watch Page
  - Search Functionality
- Sign In with google functionality => using firebase
- Use Tailwind CSS
- Getting popular video data using YouTube API
- Add Shimmer UI before loading video data
- Search using -> live API, Debouncing, Caching
- Added Side Video cards for watch page
- Custom Hook -> usePopularVideos, useVideoComments, useVideoDetails, useVideoUsingSearch
- Successfully fetch top 50 comments for a particular video
- Fetch particular video details for watch page
- Implement Live Chat Functionality like YouTube
- Lazy loading for faster load
- Responsive for mobile size => using Tailwind

# App Structure

- Login
    - Login with Google Account
    - Redirect to App Body
- Body
    - Header
    - SideBar
    - MainContainer
        - ButtonList * N
        - VideoContainer 
            - VideoCard * N
- WatchPage
    - VideoIframe
    - Comments
        - Comment * N
    - SideVideoCards
- LiveChat
    - VideoIframe
    - LiveChatContainer

# Clone 

- Clone this repository to your system
- In terminal use command => npm i (to install dependencies)
- npm start
