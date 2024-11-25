import axios from "axios";
const apikey = import.meta.env.VITE_CHAT_API_KEY;
export const sendQuery = async(userQuery)=>{
    const options = {
    method: 'POST',
    url: 'https://api.on-demand.io/chat/v1/sessions/674468213ccc9c388cc850b1/query',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        apikey: '8vvEKkMf3kEneMTyJ48D7qK70UOeBXtw'
    },
    data: {
        responseMode: 'sync',
        query: userQuery,
        endpointId: 'predefined-openai-gpt4o'
    }
    };
    try{
        const res = await axios.request(options);
        console.log(res.data);
        console.log(apikey);
        return res.data;
    }catch(error){
        console.log("CANT GET CHAT RESPONSE", error);
    }
}