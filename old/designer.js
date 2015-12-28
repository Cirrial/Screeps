module.exports = function() {
    return {
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
        },
        miner: {
            body: [MOVE, WORK]
        },
        courier: {
            body: [MOVE, CARRY, MOVE]
        }
    };
};

