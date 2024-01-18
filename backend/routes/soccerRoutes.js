import { addNewPlayer, getPlayers, getPlayerWithID , updatePlayer, deletePlayer} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    .get(getPlayers)
    .post(addNewPlayer); 

    app.route('/players/:playerId')
        .get(getPlayerWithID)
        .put(updatePlayer) // Added route for updating a player
        .delete(deletePlayer); 
}

export default routes;