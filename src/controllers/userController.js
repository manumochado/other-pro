import * as controller from './mainController'

export const getAllUsers = (req, res) => {
    controller.getAllDataEntity(req, res, 'users')
}

export const getUserById = (req, res) => {
    controller.getEntityById(req, res, 'users')
}

export const login = (req, res) => {
    controller.getFilterDataEntity(req, res, 'users', `identification = '${req.body.identification}' AND password = '${req.body.password}'`)
}

export const createUsers = (req, res) => {
    controller.createEntity(req, res, 'users')
}