import * as controller from './mainController'

export const createPayment = (req, res) => {
    controller.createEntity(req, res, 'payments')
}

export const getAllPayments = (req, res) => {
    controller.getAllDataEntity(req, res, 'payments')
}

export const getPaymentById = (req, res) => {
    controller.getEntityById(req, res, 'payments')
}

