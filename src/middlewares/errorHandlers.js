export function notFound(req, res, next) {
  res.render("404");
  next();
}

export function errorHandler(error, req, res, next) {
  const status = error.status || 500;
  res.status(status).json({ message: error.message });
}