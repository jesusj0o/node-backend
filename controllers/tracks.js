const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};
const getItem = async (req, res) => {

  try {
    req = matchedData(req); 
    const {id} = req;
    const data = await tracksModel.findById(id);
    res.send({data});
  } catch (error) {
    handleHttpError(res, "ERRROR_GET_ITEM")
  }

};
/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};
const updateItems = async (req, res) => {};
const deleteItems = async (req, res) => {};

module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
