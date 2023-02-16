function request(actionType, allType) {
    return {
        type: actionType,
        payload: allType
    }
}
function success(actionType, response) {
    return {
        type: actionType,
        payload: response
    }
}
function failure(actionType, error) {
    return {
        type: actionType,
        payload: error
    }
}


export {
    request,
    success,
    failure,
}
