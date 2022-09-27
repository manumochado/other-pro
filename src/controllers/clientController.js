import * as controller from './mainController'

export const createClient = (req, res) => {
    controller.createEntity(req, res, 'clients')
}

export const getAllClients = (req, res) => {
    controller.getAllDataEntity(req, res, 'clients')
}

export const getClientById = (req, res) => {
    controller.getEntityById(req, res, 'clients')
}

