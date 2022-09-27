import * as controller from './mainController'

export const createRoute = (req, res) => {
    controller.createEntity(req, res, 'routes')
}

export const getAllRoutes = (req, res) => {
    controller.getAllDataEntity(req, res, 'routes')
}

export const getRouteById = (req, res) => {
    controller.getEntityById(req, res, 'routes')
}

