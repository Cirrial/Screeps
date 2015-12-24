var builder = require('builder');
var harvester = require('harvester');
var guard = require('guard');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            harvester(creep);
        }
        if(creep.memory.role == 'builder') {
            builder(creep);
        }
        if(creep.memory.role == 'guard') {
            guard(creep);
        }
    }
}