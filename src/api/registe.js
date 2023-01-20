export async function registerApi(name, email, phone, password, passwordConfirm){
    try {
        const response = await fetch('https://appmobile.altcel2.com/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
                passwordConfirm
            })
        }) 
        return data = await response.json()
    } catch (error) {
        console.log(error)
    }
}