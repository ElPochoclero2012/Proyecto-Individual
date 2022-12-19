var {Products} = require("../models/product.model");

const getProduct = async (req, res) => {
  const response = await Products.findAll()
    .then((data) => {
      const res = { error: false, data: data };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};

const createProduct = async (req, res) => {
  try {
    let urlImage;
    if(req.file === undefined) {
      urlImage=null;
    }else {
      const url= req.protocol + '://' + req.get('host');
      urlImage = url + '/upload/' + req.file.filename;
    }
    const modelData = {
      name: req.body.name,
      category: req.body.category,
      image: urlImage,
      price: req.body.price
    };
    const response = await Products.create(modelData)
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Product has been created successfully...",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.findAll({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.update(req.body, {
      where: { id: id },
    })
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Product has been updated successfully...",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.destroy({
      where: { id: id },
    })
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Product has been deleted successfully...",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    getProduct,
    createProduct,
    getByIdProduct,
    updateProduct,
    deleteProduct
}