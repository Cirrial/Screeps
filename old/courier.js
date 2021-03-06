module.exports = function (creep) {

    var closestEnergy = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);

    if(creep.carry.energy == 0 && closestEnergy) {
        // collect
        if(creep.pos.isNearTo(closestEnergy)) {
            creep.pickup(closestEnergy);
        } else {
            creep.moveTo(closestEnergy);
        }
    } else {
        // dropoff
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(creep.pos.isNearTo(spawner)) {
            creep.transfer(spawner, RESOURCE_ENERGY);
        } else {
            creep.moveTo(spawner);
        }
    }

};