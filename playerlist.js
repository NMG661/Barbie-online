let players = [];

const getAll = () => {
    return new Promise((resolve) => {
        resolve(players);
    });
};

const get = (uuid) => {
    return new Promise((resolve) => {
        players.map(player => {
            if (player.uuid !== uuid) return;
            resolve(player);
        });
    });
};

const add = (uuid) => {
    return new Promise((resolve) => {
        let player = {
            uuid,
            "x": 620,
            "y": 300,
            "z": 400,
        };
        players.push(player);
        resolve(true);
    });
};

const update = (uuid, newX, newY, newZ) => {
    players.map(player => {
        if (player.uuid !== uuid) return;
        player.x = newX;
        player.y = newY;
        player.z = newZ;
    });
};

const remove = (uuid) => {
    players = players.filter(player => player.uuid !== uuid);
};

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
};
