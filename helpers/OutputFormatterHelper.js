class OutputFormatter {
  static formatUser(user) {
    if (!user) {
      return {};
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      bookmarks: user.bookmarks
    };
  }

  static formatBookmark(bookmark) {
    if (!bookmark) {
      return {};
    }

    return {
      id: bookmark._id,
      link: bookmark.link,
      owner: bookmark.owner,
      category: bookmark.category
    };
  }
}

module.exports = OutputFormatter;