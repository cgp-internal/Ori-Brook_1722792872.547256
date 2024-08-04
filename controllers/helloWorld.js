module.exports = {
  helloWorldCtrl: function(req, res) {
    const message = 'Hello World!';
    res.json({ message });
  }
}