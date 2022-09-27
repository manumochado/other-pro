import * as controller from './mainController'

export const createExpense = (req, res) => {
    controller.createEntity(req, res, 'expenses')
}

export const getAllExpenses = (req, res) => {
    controller.getAllDataEntity(req, res, 'expenses')
}

export const getExpenseById = (req, res) => {
    controller.getEntityById(req, res, 'expenses')
}
