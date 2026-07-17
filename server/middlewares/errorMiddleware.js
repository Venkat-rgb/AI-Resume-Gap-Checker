export const errorMiddleware = (err, req, res, next) => {
  try {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
      message: err.message,
    });
  } catch (err) {
    console.error(`errorMiddleware error: ${err?.message}`);
  }
};
