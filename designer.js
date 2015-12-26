module.exports = function() {
    var designs = {
        builder: {
            body: [WORK, WORK, CARRY, MOVE]
        },
        harvester: {
            body: [WORK, CARRY, MOVE]
        },
        guard: {
            body: [MOVE, MOVE, ATTACK]
        },
        healer: {
            body: [MOVE, HEAL]
        }
    };

    return designs;
};

