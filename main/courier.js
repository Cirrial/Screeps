module.exports = function (creep) {

    var closestEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);

    if(creep.carry.energy < creep.carryCapacity && closestEnergy) {
        // collect
        if(creep.isNearTo(closestEnergy)) {
            creep.pickup(closestEnergy);
        } else {
            creep.moveTo(closestEnergy);
        }
    } else {
        // dropoff
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(creep.isNearTo(spawner)) {
            creep.transfer(spawner, RESOURCE_ENERGY);
        } else {
            creep.moveTo(spawner);
        }
    }

};