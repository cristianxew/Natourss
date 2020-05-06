//funcion para manejar todos los errorer
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
