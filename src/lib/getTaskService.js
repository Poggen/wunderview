const headers = new Headers();
headers.append("X-Access-Token", process.env.REACT_APP_WUNDERLIST_ACCESS_TOKEN);
headers.append("X-Client-ID", process.env.REACT_APP_WUNDERLIST_CLIENT_ID);
headers.append("Content-Type", "application/json");

const parameters = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default' 
};

const baseUrl = 'https://a.wunderlist.com/api/v1/';

const resource = 'lists';

const fullUrl = baseUrl + resource;

const request = new Request(fullUrl, parameters);

export const loadLists = () => {
    return fetch(request)
    .then(res => res.json())
}