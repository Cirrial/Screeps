// investigate this:
// http://support.screeps.com/hc/en-us/community/posts/201432602-Functional-Roles

var builder = require('builder');
var harvester = require('harvester');
var guard = require('guard');
var spawner = require('spawner');
var healer = require('healer');

module.exports.loop = function () {

    // spawning behaviour
    for(var name in Game.spawns) {
        var spawn = Game.spawns[name];
        spawner(spawn);
    }

    // action behaviour
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        switch(creep.memory.role) {
            case 'builder':
                builder(creep);
                break;
            case 'harvester':
                harvester(creep);
                break;
            case 'guard':
                guard(creep);
                break;
            case 'healer':
                healer(creep);
                break;
        }
    }
};