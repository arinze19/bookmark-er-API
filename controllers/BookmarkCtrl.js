const { ErrorHandler } = require('../helpers/ErrorHelper');
const { OutputFormatter } = require('../helpers');
const { Bookmark } = require('../models');

class BookmarkCtrl {
  static async create(req, res, next) {
    const { link, category } = req.body;
    const { id } = req.user;

    let bookmark = await Bookmark.findOne({ link, owner: id });

    if (bookmark) {
      return next(new ErrorHandler('Link already exists', 409));
    }

    bookmark = new Bookmark({
      link,
      category,
      owner: id
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

    const bookmarks = await Bookmark.find({ owner: id });

    res.status(200).send({
      data: {
        bookmarks: bookmarks.map((x) => OutputFormatter.formatBookmark(x))
      }
    });
  }

  // static async update(req, res, next) {
  //   const { id } = req.user;
  //   const { link } = req;

  //   const bookmark = await Bookmark.findOne({ link, owner: id });

  //   if (!bookmark) {
  //     return next(new ErrorHandler('Bookmark not found', 404));
  //   }

  //   ['link', 'category'].map((prop) => {
  //     if (body[prop]) {
  //       bookmark[prop] = body[prop];
  //     }
  //   });
  // }
}

module.exports = BookmarkCtrl;
