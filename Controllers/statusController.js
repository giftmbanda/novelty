const { response, validate, queryFunction } = require('../Helpers');

/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function getIdeaStatus() {

    if (validate.validate(data.user_id)) {
        return response(400, "Business id is required.", data);
    }

    const sql = "CALL getIdeaStatus(?)";

    return queryFunction(sql, [data.user_id]).then((result) => {
        return response(200, 'Here are the status you requested.', result[0]);
    }).catch(error => {
        return response(400, 'Could not get the status.', error.sqlMessage);
    })
}
/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function getAllStatus() {

    const sql = "CALL getStatusCategory()";

    return queryFunction(sql).then((result) => {
        return response(200, 'Here are the status you requested.', result[0]);
    }).catch(error => {
        return response(400, 'Could not get the status.', error.sqlMessage);
    })
}

/*
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function updateStatus(data) {

    if (validate.validate(data.status_id)) {
        return response(400, "Status level id is required.", data);
    }
    if (validate.validate(data.bus_id)) {
        return response(400, "Business id is required.", data);
    }
    if (validate.validate(data.user_id)) {
        return response(400, "Business id is required.", data);
    }
    
    const sql = "CALL updateIdeaStatus(?)";

    return queryFunction(sql, [data.status_id, data.bus_id, data.user_id]).then((result) => {
        return response(200, 'Status level updated succefully.', result[0]);
    }).catch(error => {
        return response(400, 'failed to updated.', error.sqlMessage);
    })
}

module.exports = { getAllStatus, updateStatus, getIdeaStatus }