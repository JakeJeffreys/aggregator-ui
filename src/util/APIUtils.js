import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getBlogs() {
    // if(!localStorage.getItem(ACCESS_TOKEN)) {
    //     return Promise.reject("No access token set.");
    // }

    return request({
        url: API_BASE_URL + "/api/blogs",
        method: 'GET'
    })
}

export function getUserBlogs(blogsRequest) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/blogs/user",
        method: 'GET',
        body: JSON.stringify(blogsRequest)
    })
}

export function setUserBlogPreferences(blogsRequest) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/blogs",
        method: 'PUT',
        body: JSON.stringify(blogsRequest)
    })
}

// export function getUserCategories() {
//     if(!localStorage.getItem(ACCESS_TOKEN)) {
//         return Promise.reject("No access token set.");
//     }
//
//     return request({
//         url: API_BASE_URL + "/api/categories/user",
//         method: 'GET',
//     })
// }