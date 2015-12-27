module.exports = function (creep) {

    var allSources = creep.room.find(FIND_SOURCES, {filter: function(source) {
        return source.energy > 0;
    }});
    var source = creep.pos.findClosestByRange(allSources);

    if(creep.isNearTo(source)) {
        creep.harvest(source);
    } else {
        creep.moveTo(source);
    }
};