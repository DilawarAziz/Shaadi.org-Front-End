
const GetUser = () => {
    if (typeof window !== "undefined") {
        let user = localStorage.getItem('user')
        if (user) {
            let parse = JSON.parse(user)
            return parse
        }
        return null
    }
}

export { GetUser }