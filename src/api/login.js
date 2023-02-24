export async function loginApi(phone, password){
    try {
        const response = await fetch('https://appmobile.altcel2.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone,
                password,
            })
        }) 
        return data = await response.json()

        const {http_code, userId} = await response.json()

        if (http_code == 400) {
            console.log('ERROOOOO')
            return false;

        }else if (http_code == 200) {
            console.log('CRACKKKKKKKK')
            // getDevices(userId)
            return data = await response.json()
        }
    } catch (error) {
        console.log(error)
        return 
    }
}