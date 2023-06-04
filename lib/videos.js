export const getCommonVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    try{
        const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
       
        // set type video is important otherwise it will give an error
        const response = await fetch(
        `${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`
      );
    const data = await response.json();
    if(data.error){
        console.error('youtube api errir', data.error)
        return [];
    }

    return data?.items.map((item) => {
        // if id not found set default id so application wont crash
        const id = item.id?.videoId || item.id
        return{
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id,
        }
    });
    }catch(error){
        console.error("something went wrong with video library", error)
        // in case of error return empty array
        return [];
    }
    
}


const getVideos = (searchQuery) =>{
    const URL = `search?part=snippet&maxResults=25&type=video&q=${searchQuery}`;
    return getCommonVideos(URL);
}
export default getVideos;

export const getPopularVideos = () => {
    const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
}

