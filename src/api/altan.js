import { get } from "react-native/Libraries/Utilities/PixelRatio";

export async function accessTokenRequestPost(){
    const production = 'ZjRWc3RzQXM4V1c0WFkyQVVtbVBSTE1pRDFGZldFQ0k6YkpHakpCcnBkWGZoajczUg==';
    try {
        const response = await fetch('https://altanredes-prod.apigee.net/v1/oauth/accesstoken?grant-type=client_credentials',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+production
            }
        })
        return data = await response.json()
    } catch (error) {
        
    }
}

export async function consultUF(service, number){
    try {
        const response = await fetch('https://appmobile.altcel2.com/consultUf?msisdn=9617161896&product=MOV',{
            method: 'GET'
        })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}