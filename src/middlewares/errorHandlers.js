export function notFound(req, res, next) {
  const error = new Error("La ressource n'existe pas");
  res.status(404).render("404");
  error.status = 404;
  next(error);
}

export function errorHandler(error, req, res, next) {
  const status = error.status || 500;
  res.status(status);
  res.json({ message: error.message });
  next();
}