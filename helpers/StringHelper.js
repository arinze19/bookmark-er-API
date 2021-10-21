class StringHelper {
  /**
   *
   * @param {string} email
   * @description verifies if an email is valid
   * @returns {boolean}
   */
  static isEmail(email) {
    return /^[a-z0-9](\w|.){5,}@\w+.([a-z]{2,})$/.test(email);
  }
}

module.exports = StringHelper;
