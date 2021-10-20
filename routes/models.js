// REQUESTS

/**
 * @typedef AuthSignupRequest
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef AuthSigninRequest
 * @property {string} email
 * @property {string} password
 */


//RESPONSES

/**
 * @typedef AuthSignupResponse 
 * @property {string} token
 * @property {UserResponse} user
 */


// GENERAL 
/**
 * @typedef UserResponse 
 * @property {string} id
 * @property {string} name
 * @property {string} email 
 * @property {Array.<BookmarkResponse>} bookmarks
 */

/**
 * @typedef BookmarkResponse 
 * @property {string} id 
 * @property {string} link 
 * @property {string} category
 */
