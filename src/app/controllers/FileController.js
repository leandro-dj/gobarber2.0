class FileController {
  async store(req, res) {
    return res.json({
      carreta: req.file.filename,
    });
  }
}

export default new FileController();
