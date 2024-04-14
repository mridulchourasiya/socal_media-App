import { Client, Databases, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.main.aura",
  projectId: "661bb467e07bdb0c3ec3",
  databaseId: "661bb6b69ecac913f736",
  userCollectionId: "661bb7002446ef3457c2",
  videoCollectionId: "661bb73c627f1d991f1f",
  storageId: "661bb941b075e6c559ea",
};

const client = new Client();
client
  .setEndpoint(config.endpoint) // your appwrite
  .setProject(config.projectId) // Replace with your project ID
  .setPlatform(config.platform); // application Id

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "mridulchouraisa121@gmail.com", "Core_1121@11", "jon dow")
  .then(
    function (response) {
      console.log(response); // Successfully created user
    },
    function (error) {
      console.log(error); // Error creating user
    }
  );
};
