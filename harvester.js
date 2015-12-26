module.exports = function (creep) {

    if(creep.carry.energy < creep.carryCapacity) {
        var source = creep.pos.findClosestByRange(FIND_SOURCES);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
    else {
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(spawner && creep.transfer(spawner, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawner);
        }
    }
};