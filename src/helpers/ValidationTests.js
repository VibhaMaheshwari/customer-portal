export const isValidText = value => {
    return /^[A-Za-z]+$/.test(value)
}

export const isValidNumber = value => {
    return /^[0-9]+$/.test(value)
}

export const isValidEmail = value => {
    return /^\S+@\S+$/.test(value)
}

export const validateFormFields = formFields => {
    let valid = true
    Object.values(formFields).forEach(val => {
        val.length > 0 && (valid = false)
    })
    return valid
}