var designer = require('designer');

Spawn.prototype.createUnit = function(name, bodyPlan, design) {
    return this.createCreep(bodyPlan, name, {role: design});
};

module.exports = function (spawn) {
    // get number of living types
    var designs = designer();
    var survey = {};
    for(var design in designs) {
        survey[design] = 0;
    }
    for(var name in Game.creeps) {
        var role = Game.creeps[name].memory.role;
        survey[role]++;
    }

    var canSpawn = !spawn.spawning;

    var spawnCount = 0;
    for(var i in Game.spawns) {
        spawnCount ++;
    }
    var idealHarvesters = spawnCount * 2;
    var idealHealers = Math.ceil(survey.guard / 2);
    if(survey.harvester < idealHarvesters && canSpawn) {
        spawn.createUnit(null, designs.harvester.body, 'harvester');
        canSpawn = false;
    }
    if(survey.builder < 1 && canSpawn && spawn.room.find(FIND_CONSTRUCTION_SITES).length > 0) {
        spawn.createUnit(null, designs.builder.body, 'builder');
        canSpawn = false;
    }
    if(survey.healer < idealHealers && canSpawn) {
        spawn.createUnit(null, designs.healer.body, 'healer');
        canSpawn = false;
    }
    if(canSpawn) {
        spawn.createUnit(null, designs.guard.body, 'guard');
        canSpawn = false;
    }
};
