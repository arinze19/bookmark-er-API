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

/**
 * @typedef BookmarkRequest 
 * @property {string} link 
 * @property {string} category
 */


//RESPONSES

/**
 * @typedef AuthResponse 
 * @property {string} token
 * @property {UserResponse} user
 */

/**
 * @typedef BookmarkResponse 
 * @property {Array.<Bookmark>} bookmarks
 */


// GENERAL 
/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} email 
 * @property {Array.<BookmarkResponse>} bookmarks
 */

/**
 * @typedef Bookmark
 * @property {string} id 
 * @property {string} link 
 * @property {string} category
 */
