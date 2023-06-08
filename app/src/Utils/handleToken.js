import jwt from 'jsonwebtoken'

export const generateToken = (validationObject) => {
    const token = jwt.sign(validationObject, process.env.REACT_APP_SECRET_LOGIN_KEY);

    return token;
}

export const checkToken = (token) => {
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_LOGIN_KEY)

            return true
        } catch (error) {

            console.log("Invalid token")

        }
    }
    return false;
}