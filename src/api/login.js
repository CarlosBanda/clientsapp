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
        console.log(response.userId)
        return data = await response.json()
        
        console.log(response.status)
        console.log(user_id)
        console.log(response.status)
        console.log(message)
        console.log(http_code)
        if (response.status == 200) {
            // statusLogin = 'login'
            // Navigations(statusLogin)
        }else if (response.status == 400 || response.status == 500) {
            // statusLogin = 'NoLogin'
            // Navigations(statusLogin)
        }
    } catch (error) {
        console.log(error)
        return 
    }
}