module.exports = function (creep) {

    var buildSites = creep.room.find(FIND_CONSTRUCTION_SITES);
    var damagedBuildings = creep.room.find(FIND_MY_STRUCTURES, {filter: function(i) {
        return i.hits < i.hitsMax;
    }});
    var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);

    // repair priority, build secondary
    if(damagedBuildings.length > 0) {
        var closestDamaged = creep.pos.findClosestByRange(damagedBuildings);
        if(spawner && creep.carry.energy == 0) {
            if(spawner.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.repair(closestDamaged) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestDamaged);
            }
        }
    } else if(buildSites.length > 0) {
        if(spawner && creep.carry.energy == 0) {
            if(spawner.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.build(buildSites[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(buildSites[0]);
            }
        }
    } else {
        if(creep.carry.energy > 0 && spawner) {
            if(creep.transfer(spawner, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawner);
            }
        }
    }
};
