import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjJiZDM4NDNlOWMxMzExZDIzYjJkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU5MjUzNiwiZXhwIjoxNjgwODUxNzM2fQ.G3h7kulqMr8doKQj1QId8qLVkylslUmfpUSFPU5AE5E";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
    
});
console.log(publicRequest)

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{ token: `Bearer ${TOKEN}` },
});

// import axios from "axios";


// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjJiZDM4NDNlOWMxMzExZDIzYjJkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc3MTY3MCwiZXhwIjoxNjgxMDMwODcwfQ.sOexAAGqFzYIboqeVX0DsB3HxtTn_nckjdxjnzMBGn8";
// console.log(TOKEN);

// export const publicRequest = axios.create({
//     baseURL: BASE_URL,
// });

// // console.log(publicRequest)

// export const userRequest = axios.create({
    
//     baseURL: BASE_URL,
//     headers: {
//         // token:`Bearer ${TOKEN}`
//         Authorization: `Bearer ${TOKEN}`,
//     },
    
// });



