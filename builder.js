module.exports = function (creep) {

    var spawner = Game.spawns.CirrSpawner;

    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(targets.length) {
        if(creep.carry.energy == 0) {
            if(spawner.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    } else {
        if(creep.carry.energy > 0) {
            if(creep.transfer(spawner, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawner);
            }
        }
    }
}
