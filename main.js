var builder = require('builder');
var harvester = require('harvester');
var guard = require('guard');

var actions = {
    builder: builder,
    harvester: harvester,
    guard: guard
};

module.exports.loop = function () {

    // spawning behaviour


    // action behaviour
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        actions[creep.memory.role](creep);
    }
}