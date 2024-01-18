import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModels';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        const savedPlayer = await newPlayer.save();
        res.json(savedPlayer);
    } catch (err) {
        res.send(err);
    }
};
export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.send(err);
    }
};
export const getPlayerWithID = async (req, res) => {
    try {
        const playerId = req.params.playerId; 
        const player = await Player.findById(playerId);
        
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json(player);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const updatedPlayer = await Player.findByIdAndUpdate(playerId, req.body, { new: true });

        if (!updatedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const deletedPlayer = await Player.findByIdAndDelete(playerId);

        if (!deletedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json(deletedPlayer);
    } catch (err) {
        res.status(500).send(err);
    }
};