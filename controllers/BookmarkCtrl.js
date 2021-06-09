const { ErrorHandler, OutputFormatter } = require('../helpers');
const { Bookmark } = require('../models');

class BookmarkCtrl {
  static async create(req, res) {
    const { link, category } = req.body;

    let bookmark = Bookmark.findOne({ link });

    if (bookmark) {
      res.status(409).send('this link already exists');
    }

    bookmark = new Bookmark({
      link,
      category
    });
    await bookmark.save();

    res.status(200).send({
      data: {
        bookmark: OutputFormatter.formatBookmark(bookmark)
      }
    });
  }

  static async retrieve(req, res) {
    const { id } = req.user;

    const bookmarks = Bookmark.find({ id });

    if (!bookmarks) {
      return next(new ErrorHandler('user not found', 404));
    }

    res.status(200).send({
      data: {
        bookmarks: bookmarks.map((x) => OutputFormatter.formatBookmark(x))
      }
    });
  }
}

module.exports = BookmarkCtrl;