import * as controller from './mainController'

export const createCredit = (req, res) => {
    controller.createEntity(req, res, 'credits')
}

export const getAllCredits = (req, res) => {
    controller.getAllDataEntity(req, res, 'credits')
}

export const getCreditById = (req, res) => {
    controller.getEntityById(req, res, 'credits')
}