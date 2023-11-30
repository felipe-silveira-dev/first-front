import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

function get<T>(endpoint: string) {
  return api.get<T>(endpoint);
}

function post(endpoint: string, data: any) {
  return api.post(endpoint, data);
}

function put(endpoint: string, data: any) {
  return api.put(endpoint, data);
}

function destroy(endpoint: string) {
  return api.delete(endpoint);
}

export { get, post, put, destroy };