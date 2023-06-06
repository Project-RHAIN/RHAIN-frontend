import jwt from 'jsonwebtoken'

export const generateToken = (validationObject) => {
    const token = jwt.sign(validationObject, 'e0eaf67e8620387e82cbe1f7d635f5a41b6d1a0b47a7eb7a317c6b94ab4d7423');

    return token;
}

export const checkToken = (token) => {
    if (token) {
        try {
            const decoded = jwt.verify(token, 'e0eaf67e8620387e82cbe1f7d635f5a41b6d1a0b47a7eb7a317c6b94ab4d7423')

            return true
        } catch (error) {

            console.log("Invalid token")

        }
    }
    return false;
}