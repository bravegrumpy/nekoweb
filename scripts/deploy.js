console.log(process.env.NEKOWEB_TOKEN);

import { URLSearchParams } from "url"
const encodedParams = new URLSearchParams();

encodedParams.set('isFolder', 'true');
encodedParams.set('pathname', 'bravegrumpy.nekoweb.org/test');

let url = "https://nekoweb.org/api/files/readfolder?pathname=test"

let options = {
    method: "POST",
    headers: {
        Cookie: [`token=${process.env.NEKOWEB_TOKEN}`],
        Authorization: process.env.NEKOWEB_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodedParams
}

const response = await fetch(url, options)
if (await (!response.ok)) console.error(await response.status);
const data = await response.text();
console.log(await (data))