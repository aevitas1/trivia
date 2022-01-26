export const EndpointURL = (parameters) => {
    //change api url depending on selected filters
    let url = "https://opentdb.com/api.php?";
    for (const [key, value] of Object.entries(parameters.parameters)) {
        if (value !== '') {
            url += `&${key}=${value}`
        }
    }
    return url
}


