import {urlConfig} from "../config/urlconfig.ts";

const fetchJokeDataJson = async (searchText: any) => {
    if(searchText == null || searchText === undefined) { 
        searchText='';
    }
    const url = urlConfig.JOKE_API + searchText;
    const responseStream = await fetch(url);
    let resultJson = await responseStream.json();
    return resultJson;
}

const fetchAdviceDataJson = async (searchText: any) => {
    if(searchText == null || searchText === undefined || searchText.trim() == '') {
        searchText = 'a';
    }
    const url = urlConfig.ADVICE_API + searchText;
    const responseStream = await fetch(url);
    let resultJson = await responseStream.json();
    return resultJson;
}

export {fetchJokeDataJson, fetchAdviceDataJson}
