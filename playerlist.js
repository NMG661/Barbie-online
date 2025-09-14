let players = [];

const getAll = () => {
    return Promise.resolve(players);
};

const get = (uuid) => {
    return Promise.resolve(players.find(player => player.uuid === uuid));
};

const add = (uuid) => {
    return new Promise((resolve) => {
        let player = {
            uuid,
            x: 0,   // posição inicial 3D (ajuste como quiser)
            y: 1,
            z: 0,
        };
        players.push(player);
        resolve(true);
    });
};

const update = (uuid, newX, newY, newZ) => {
    players.forEach(player => {
        if (player.uuid === uuid) {
            player.x = newX;
            player.y = newY;
            player.z = newZ;
        }
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