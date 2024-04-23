const getAllProducts = (req, res) => {
  res.json({ message: "all products" });
};

const addProduct = (req, res) => {
  res.json({ message: "product added" });
};
const getProduct = (req, res) => {
    const pid = req.params.pid;
  res.json({ message: `product ${pid} description` });
};
const deleteProduct = (req, res) => {
  res.json({ message: "product deleted" });
};
const editProduct = (req, res) => {
  res.json({ message: `product edit` });
};

export { getAllProducts, addProduct, getProduct, deleteProduct, editProduct };
