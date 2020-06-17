import { API_URL } from "../constants";
export default {
  getNews: () => `${API_URL}`,
  userSignIn: () => `${API_URL}/user/sessions`,
  userHouses: () => `${API_URL}/user/houses`,
  userGuesses: () => `${API_URL}/user/guesses`,
  agentProfile: () => `${API_URL}/agent/profiles`,
  agentSignIn: () => `${API_URL}/agent/sessions`,
  agentHouses: () => `${API_URL}/agent/houses`,
  agentGuesses: () => `${API_URL}/agent/guesses`,
  agentProfileSignedUrl: () => `${API_URL}/agent/profiles/new`,
  userHouseSignedUrl: () => `${API_URL}/user/houses/new`,
  chatUrl: () => `${API_URL}/chats`,
  messagesUrl: () => `${API_URL}/messages`
};
