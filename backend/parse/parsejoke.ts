import {randomNumberInterval} from "../utils/commonutils.ts"; 

const parseJokeResponseJson = (responseJson:any) => {
    if(responseJson["error"] == true) {
        return {};
    } else if (responseJson["type"] == "twopart") {
        let twoPartString = responseJson["setup"] + " " + responseJson["delivery"];
        return {message: cleanString(twoPartString)};
    } else {
        return{message: cleanString(responseJson["joke"])};
    }
};

const parseAdviceResponseJson = (responseJson:any) => {
    if(responseJson.hasOwnProperty('message')) {
        return {};
    } else {
        let resultArray = responseJson["slips"];
        let randomResultIndex = randomNumberInterval(0, resultArray.length);
        return {message: resultArray[randomResultIndex]["advice"]};
    }
}
const cleanString = (textString:string) => {
    let cleanedTextString = textString.replace('\n',"");
    cleanedTextString = cleanedTextString.replace('\"',"");
    cleanedTextString = cleanedTextString.replace('\\',"");
    return cleanedTextString;
};

export {parseJokeResponseJson, parseAdviceResponseJson}
