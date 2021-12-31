import {fetchJokeDataJson, fetchAdviceDataJson} from "./service/apiservice.ts";
import {parseJokeResponseJson, parseAdviceResponseJson} from "./parse/parsejoke.ts"; 

const adviceApiResponse = async ({request, response }: { request:any; response: any }) => {
  let searchText = request.url.searchParams.get("text");
  let responseJson = await fetchAdviceDataJson(searchText);
  let parsedAdviceJson = parseAdviceResponseJson(responseJson);
  if (Object.keys(parsedAdviceJson).length == 0) {
    responseJson = await fetchAdviceDataJson("a");
    parsedAdviceJson = parseAdviceResponseJson(responseJson);
  }
  response.body = parsedAdviceJson;
} 

const jokeApiResponse = async ({request, response }: { request:any; response: any }) => {
  let searchText  = request.url.searchParams.get("text");
  let responseJson = await fetchJokeDataJson(searchText);
  let parsedJokeJson = parseJokeResponseJson(responseJson);
  if (Object.keys(parsedJokeJson).length == 0) {
    responseJson = await fetchJokeDataJson("");
    parsedJokeJson = parseJokeResponseJson(responseJson);
  }
  response.body = parsedJokeJson;
}

export { adviceApiResponse, jokeApiResponse }
