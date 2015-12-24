module.exports = function (creep) {

    var spawner = Game.spawns.CirrSpawner;

    if(creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else {
        if(creep.transfer(spawner, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawner);
        }
    }
}