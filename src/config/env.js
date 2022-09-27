import { config } from "dotenv"

config()

export default {
    host : process.env.HOST,
    port_db : process.env.PORT_DB,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE, 
    port_app : process.env.PORT_APP,
}
