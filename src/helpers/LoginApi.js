export const LoginApi = async({phone, password}) => {
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

        const {user_id, message, http_code} = await response.json()
       
        // console.log(response.status)
        // // console.log(user_id)
        // // console.log(response.status)
        // console.log(message)
        // console.log(http_code)
        const responseApi = {
            user_id,
            message,
            http_code
        }
        return responseApi

    }catch(error){
        console.log(error)
    }
}
