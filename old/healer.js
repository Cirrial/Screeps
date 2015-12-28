module.exports = function(creep) {

    var allWounded = creep.room.find(FIND_MY_CREEPS, {filter: function(i) {
        return i.hits < i.hitsMax;
    }});

    if(allWounded.length > 0) {
        var wounded = creep.pos.findClosestByRange(allWounded);
        if(creep.pos.isNearTo(wounded)) {
            creep.heal(wounded);
        } else {
            creep.moveTo(wounded);
            if(creep.pos.inRangeTo(wounded.pos, 3)) {
                creep.rangedHeal(wounded);
            }
        }
    } else {
        var nearestFlag = creep.pos.findClosestByRange(FIND_FLAGS);
        if(nearestFlag) {
            if(!creep.pos.isNearTo(nearestFlag)) {
                creep.moveTo(nearestFlag);
            }
        } else {
            var nearestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
            if(!creep.pos.isNearTo(nearestSpawn)) {
                creep.moveTo(nearestSpawn);
            }
        }
    }
};
