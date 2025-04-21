function prepareTextToLink (str: string | undefined) {
    return str ? str.replace(/\s/g, '') : ''
}

export default prepareTextToLink