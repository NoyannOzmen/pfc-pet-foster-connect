export function notFound(req, res, next) {
  const error = new Error("La ressource n'existe pas");
  error.status = 404;
  next(error);
}

export function errorHandler(error, req, res, next) {
  const status = error.status || 500;
  res.status(status).json({ message: error.message });
}