module.exports = function (creep) {

    // filter out source keepers
    var targets = creep.room.find(FIND_HOSTILE_CREEPS, { filter: function(i) {
        return i.owner.username != 'Source Keeper';
    }});

    if(targets.length) {
        if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
        }
    } else {
        var nearestSpawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(!creep.pos.isNearTo(nearestSpawn)) {
            creep.moveTo(nearestSpawn);
        }
    }
}