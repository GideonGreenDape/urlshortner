function shortenerUtility(url) {
   

    const randomId= Math.random().toString(36).substring(2, 8);
    const shorturl = `http://shortenedurl.com/${randomId}`;
    return shorturl;
}



export default shortenerUtility;
