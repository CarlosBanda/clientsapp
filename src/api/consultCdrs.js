export async function consultCdrs(type, phone, dateStart, dateEnd){
    let url = 'https://appmobile.altcel2.com/consultCdrs?' + new URLSearchParams({
    // let url = 'http://127.0.0.1:8000?' + new URLSearchParams({
        type,
        phone,
        dateStart,
        dateEnd,
    })
    // return url;
    try {
        const response = await fetch(url)
        return data = await response.json()
    } catch (error) {
        return console.log(error)
    }
}

